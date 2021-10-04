import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRate } from "../../../redux/reducers/Rates/apiCalls";
import * as Yup from "yup";
import Select from "react-select";
import { RootState } from "../../../redux/store";
import { rateFetchType } from "../../../redux/reducers/Rates/ratesState";
import { resetRate } from "../../../redux/reducers/Rates/rateSlice";

interface aProps {
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  fetchRates: Function;
  selectedRate: rateFetchType;
}
export const UpdateRate: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const { setShowUpdateModal, showUpdateModal, fetchRates, selectedRate } =
    props;

  const rates = useSelector((state: RootState) => state.rates);
  const currencies = useSelector((state: RootState) => state.currencies);
  const fxmarkets = useSelector((state: RootState) => state.fxmarkets);

  const formik = useFormik({
    initialValues: {
      currency_from: {
        label: selectedRate.currency_from.currency_name,
        value: selectedRate.currency_from._id,
      },
      currency_to: {
        label: selectedRate.currency_to.currency_name,
        value: selectedRate.currency_to._id,
      },
      fx_market: {
        label: selectedRate?.fx_market?.location_name,
        value: selectedRate?.fx_market?._id,
      },
      conversion_rate: selectedRate.conversion_rate,
    },
    onSubmit: ({ currency_from, currency_to, fx_market, conversion_rate }) => {
      updateRate(dispatch, {
        id: selectedRate.id,
        updateData: {
          currency_from: currency_from?.value,
          currency_to: currency_to?.value,
          fx_market: fx_market?.value,
          conversion_rate,
        },
      });
    },
    validationSchema: Yup.object({
      currency_from: Yup.object().shape({
        value: Yup.string().required("Please select currency from"),
      }),
      currency_to: Yup.object().shape({
        value: Yup.string().required("Please select currency to"),
      }),
      fx_market: Yup.object().shape({
        value: Yup.string().required("Please select exchange market"),
      }),
      conversion_rate: Yup.string().required("Please enter conversion rate"),
    }),
  });

  useEffect(() => {
    if (currencies.updateData) {
      formik.resetForm();
    }
  }, [currencies.updateData, formik]);

  return (
    <Modal
      show={showUpdateModal}
      onHide={() => {
        dispatch(resetRate());
        setShowUpdateModal(false);
        fetchRates();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update FX rate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {rates.updateData !== null && (
          <Alert variant="success"> FX rate updated successfully</Alert>
        )}
        {rates.updateError !== null && (
          <Alert variant="error">Unable to update FX rate</Alert>
        )}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12">Currency To</label>
            <div className="col-md-12">
              <Select
                name="currency_to"
                value={formik.values.currency_to}
                getOptionLabel={(e) => e?.label}
                getOptionValue={(e) => e.value}
                options={currencies.fetchData.map((cur) => {
                  return {
                    value: cur.id,
                    label: `${cur?.currency_name}(${cur?.currency_code})`,
                  };
                })}
                isLoading={rates.fetching}
                onChange={(value) => {
                  formik.setFieldValue("currency_to", value);
                }}
              />
              {formik.errors.currency_to?.value && (
                <div className="text-danger">
                  {formik.errors.currency_to.value}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-12">Currency To</label>
            <div className="col-md-12">
              <Select
                name="currency_to"
                value={formik.values.currency_to}
                getOptionLabel={(e) => e?.label}
                getOptionValue={(e) => e.value}
                options={currencies.fetchData.map((cur) => {
                  return {
                    value: cur.id,
                    label: `${cur?.currency_name}(${cur?.currency_code})`,
                  };
                })}
                isLoading={rates.fetching}
                onChange={(value) => {
                  formik.setFieldValue("currency_to", value);
                }}
              />
              {formik.errors.currency_to?.value && (
                <div className="text-danger">
                  {formik.errors.currency_to.value}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-12">Fx Market</label>
            <div className="col-md-12">
              <Select
                name="fx_market"
                value={formik.values.fx_market}
                getOptionLabel={(e) => e?.label}
                getOptionValue={(e) => e.value}
                options={fxmarkets.fetchData.map((fxm) => {
                  return {
                    value: fxm?.id,
                    label: fxm?.location_name,
                  };
                })}
                isLoading={fxmarkets.fetching}
                onChange={(value) => {
                  formik.setFieldValue("fx_market", value);
                }}
              />
              {formik.errors.fx_market?.value && (
                <div className="text-danger">
                  {formik.errors.fx_market.value}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-12">Rate</label>
            <div className="col-md-12">
              <input
                name="conversion_rate"
                type="text"
                className="form-control"
                placeholder="Conversion Rate"
                onChange={formik.handleChange}
                value={formik.values.conversion_rate}
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
              dispatch(resetRate());
              setShowUpdateModal(false);
              fetchRates();
            }}
          >
            Close
          </Button>
          <Button
            disabled={rates.updateData !== null || rates.updating}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {rates.updating ? (
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
