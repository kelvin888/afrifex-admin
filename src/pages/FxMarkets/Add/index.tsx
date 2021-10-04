import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCurrency } from "../../../redux/reducers/Currencies/currencySlice";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";
import { createFxMarket } from "../../../redux/reducers/FxMarkets/apiCalls";

interface aProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  showAddModal: boolean;
  fetchFxMarkets: Function;
}
export const AddFxMarket: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const { setShowAddModal, showAddModal, fetchFxMarkets } = props;
  const fxmarkets = useSelector((state: RootState) => state.fxmarkets);

  const formik = useFormik({
    initialValues: {
      location_name: "",
    },
    onSubmit: (values) => {
      createFxMarket(dispatch, values);
    },
    validationSchema: Yup.object({
      location_name: Yup.string().required("Please enter currency name"),
    }),
  });

  useEffect(() => {
    if (fxmarkets.createData) {
      formik.resetForm();
    }
  }, [fxmarkets.createData, formik]);

  return (
    <Modal
      show={showAddModal}
      onHide={() => {
        dispatch(resetCurrency());
        setShowAddModal(false);
        fetchFxMarkets();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Fx Market
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {fxmarkets.createData !== null && (
          <Alert variant="success">New Fx market added successfully</Alert>
        )}
        {fxmarkets.createError !== null && (
          <Alert variant="error">Unable to add Fx Market</Alert>
        )}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12">Location Name</label>
            <div className="col-md-12">
              <input
                name="location_name"
                type="text"
                className="form-control"
                placeholder="Location Name"
                onChange={formik.handleChange}
                value={formik.values.location_name}
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
              dispatch(resetCurrency());
              setShowAddModal(false);
              fetchFxMarkets();
            }}
          >
            Close
          </Button>
          <Button
            disabled={fxmarkets.createData !== null || fxmarkets.creating}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {fxmarkets.creating ? (
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