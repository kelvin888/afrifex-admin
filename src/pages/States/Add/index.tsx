import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../../redux/reducers/States/stateSlice";
import { createState } from "../../../redux/reducers/States/apiCalls";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";

interface aProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  showAddModal: boolean;
  fetchStates: Function;
}
export const AddState: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const { setShowAddModal, showAddModal, fetchStates } = props;
  const states = useSelector((state: RootState) => state.states);

  const formik = useFormik({
    initialValues: {
      state_name: "",
    },
    onSubmit: (values) => {
      createState(dispatch, values);
    },
    validationSchema: Yup.object({
      state_name: Yup.string().required("Please enter state name"),
    }),
  });

  useEffect(() => {
    if (states.createData) {
      formik.resetForm();
    }
  }, [states.createData, formik]);

  return (
    <Modal
      show={showAddModal}
      onHide={() => {
        dispatch(resetState());
        setShowAddModal(false);
        fetchStates();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add State
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {states.createData !== null && (
          <Alert variant="success">New State added successfully</Alert>
        )}
        {states.createError !== null && (
          <Alert variant="error">Unable to add State</Alert>
        )}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12">State Name</label>
            <div className="col-md-12">
              <input
                name="state_name"
                type="text"
                className="form-control"
                placeholder="State Name"
                onChange={formik.handleChange}
                value={formik.values.state_name}
              />
            </div>
          </div>
       
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(resetState());
              setShowAddModal(false);
              fetchStates();
            }}
          >
            Close
          </Button>
          <Button
            disabled={states.createData !== null || states.creating}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {states.creating ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
