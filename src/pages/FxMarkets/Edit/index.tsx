import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetFxMarket } from "../../../redux/reducers/FxMarkets/fxMarketSlice";
import { updateFxMarket } from "../../../redux/reducers/FxMarkets/apiCalls";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";
import { fxMarketType } from "../../../redux/reducers/FxMarkets/fxMarketState";

interface aProps {
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  fetchFxMarkets: Function;
  selectedFxMarket: fxMarketType;
}
export const UpdateFxMarket: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const {
    setShowUpdateModal,
    showUpdateModal,
    fetchFxMarkets,
    selectedFxMarket,
  } = props;
  const fxmarkets = useSelector((state: RootState) => state.fxmarkets);

  const formik = useFormik({
    initialValues: {
      location_name: selectedFxMarket.location_name,
      location_state: {
        value: "",
        label: ""
      }
    },
    onSubmit: (values) => {
      updateFxMarket(dispatch, {
        id: selectedFxMarket.id,
        updateData: {
          location_name: values.location_name,
          location_state: values.location_state.value
        }
      });
    },
    validationSchema: Yup.object({
      location_name: Yup.string().required("Please enter market location"),
      location_state: Yup.object().shape({
        value: Yup.string().required("Please select location state"),
      }),
    }),
  });

  useEffect(() => {
    if (fxmarkets.createData) {
      formik.resetForm();
    }
  }, [fxmarkets.createData, formik]);

  const handleClose = () => {
    dispatch(resetFxMarket());
    setShowUpdateModal(false);
    fetchFxMarkets();
  }

  return (
    <Modal
      show={showUpdateModal}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Fx Market
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {fxmarkets.updateData !== null && (
          <Alert variant="success">Fx market updated successfully</Alert>
        )}
        {fxmarkets.updateError !== null && (
          <Alert variant="error">Unable to update fx market</Alert>
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
            onClick={() => handleClose()}
          >
            Close
          </Button>
          <Button
            disabled={fxmarkets.updateData !== null || fxmarkets.creating}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {fxmarkets.updating ? (
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
