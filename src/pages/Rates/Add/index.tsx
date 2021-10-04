import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetRate } from "../../../redux/reducers/Rates/rateSlice";
import { createRates } from "../../../redux/reducers/Rates/apiCalls";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";
import Select from "react-select";
import { getAllFxMarket } from "../../../redux/reducers/FxMarkets/apiCalls";
import { getAllCurrency } from "../../../redux/reducers/Currencies/apiCalls";

interface aProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  showAddModal: boolean;
  fetchRates: Function;
}
export const AddRate: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const { setShowAddModal, showAddModal, fetchRates } = props;
  const rates = useSelector((state: RootState) => state.rates);
  const currencies = useSelector((state: RootState) => state.currencies);
  const fxmarkets = useSelector((state: RootState) => state.fxmarkets);

  useEffect(() => {
    getAllFxMarket(dispatch);
    getAllCurrency(dispatch);
  }, []);

  const formik = useFormik({
    initialValues: {
      currency_from: { value: "", label: "-currency-from-" },
      currency_to: { value: "", label: "-currency-to" },
      fx_market: { value: "", label: "-fx market-" },
      conversion_rate: "",
    },
    onSubmit: ({ currency_from, currency_to, fx_market, conversion_rate }) => {
      createRates(dispatch, {
        currency_from: currency_from.value,
        currency_to: currency_to.value,
        fx_market: fx_market.value,
        conversion_rate: conversion_rate,
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
    if (rates.createData) {
      formik.resetForm();
    }
  }, [rates.createData, formik]);

  console.log("fxmarkets.fetchData", fxmarkets.fetchData);

  const handleClose = () => {
    dispatch(resetRate());
    setShowAddModal(false);
    fetchRates();
  };

  return (
    <Modal
      show={showAddModal}
      onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Fx Rate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {rates.createData !== null && (
          <Alert variant="success">New Rate added successfully</Alert>
        )}
        {rates.createError !== null && (
          <Alert variant="error">Unable to add FX rate</Alert>
        )}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12">Currency From</label>
            <div className="col-md-12">
              <Select
                name="currency_from"
                value={formik.values.currency_from}
                getOptionLabel={(e) => e?.label}
                getOptionValue={(e) => e.value}
                options={currencies.fetchData.map((cur) => {
                  return {
                    value: cur.id,
                    label: `${cur.currency_name}(${cur.currency_code})`,
                  };
                })}
                isLoading={rates.fetching}
                onChange={(value) => {
                  formik.setFieldValue("currency_from", value);
                }}
              />
              {formik.errors.currency_from?.value && (
                <div className="text-danger">
                  {formik.errors.currency_from.value}
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
                    label: `${cur.currency_name}(${cur.currency_code})`,
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
                    value: fxm.id,
                    label: fxm.location_name,
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
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button
            disabled={currencies.createData !== null || currencies.creating}
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {currencies.creating ? (
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
