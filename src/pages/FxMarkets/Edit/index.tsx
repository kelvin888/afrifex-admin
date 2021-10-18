import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";
import { updateFxMarket } from "../../../redux/reducers/FxMarkets/apiCalls";
import Select from "react-select";
import { resetFxMarket } from "../../../redux/reducers/FxMarkets/fxMarketSlice";
import { getAllStates } from "../../../redux/reducers/States/apiCalls";
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
  const states = useSelector((state: RootState) => state.states);

  useEffect(() => {
    getAllStates(dispatch);
  }, []);

  const formik = useFormik({
    initialValues: {
      location_name: selectedFxMarket.location_name,
      location_state: {
        value: selectedFxMarket.location_state._id,
        label: selectedFxMarket.location_state.state_name,
      },
    },
    onSubmit: (values) => {
      updateFxMarket(dispatch, {
        id: selectedFxMarket.id,
        updateData: {
          location_name: values.location_name,
          location_state: values.location_state.value,
        },
      });
    },
    validationSchema: Yup.object({
      location_name: Yup.string().required("Please enter state name"),
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

  return (
    <Modal
      show={showUpdateModal}
      onHide={() => {
        dispatch(resetFxMarket());
        setShowUpdateModal(false);
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
        {fxmarkets.updateData !== null && (
          <Alert variant="success"> Fx market updated successfully</Alert>
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

          <div className="form-group">
            <label className="col-md-12">Location State</label>
            <div className="col-md-12">
              <Select
                name="location_state"
                value={formik.values.location_state}
                getOptionLabel={(e) => e?.label}
                getOptionValue={(e) => e?.value}
                options={states.fetchData.map((st) => {
                  return {
                    value: st.id,
                    label: `${st.state_name}`,
                  };
                })}
                isLoading={states.fetching}
                onChange={(value) => {
                  formik.setFieldValue("location_state", value);
                }}
              />
              {formik.errors.location_state?.value && (
                <div className="text-danger">
                  {formik.errors.location_state.value}
                </div>
              )}
            </div>
          </div>
        </form>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(resetFxMarket());
              setShowUpdateModal(false);
              fetchFxMarkets();
            }}
          >
            Close
          </Button>
          <Button
            disabled={fxmarkets.updateData !== null || fxmarkets.updating}
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
