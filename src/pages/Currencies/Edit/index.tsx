import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCurrency } from "../../../redux/reducers/Currencies/currencySlice";
import { updateCurrency } from "../../../redux/reducers/Currencies/apiCalls";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";
import { currencyType } from "../../../redux/reducers/Currencies/currencyState";

interface aProps {
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  fetchCurrencies: Function;
  selectedCurrency: currencyType;
}
export const UpdateAgentCategory: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const {
    setShowUpdateModal,
    showUpdateModal,
    fetchCurrencies,
    selectedCurrency,
  } = props;
  const currencies = useSelector((state: RootState) => state.currencies);

  const formik = useFormik({
    initialValues: {
      currency_name: selectedCurrency.currency_name,
      currency_code: selectedCurrency.currency_code,
    },
    onSubmit: (values) => {
      updateCurrency(dispatch, {
        id: selectedCurrency.id,
        updateData: values,
      });
    },
    validationSchema: Yup.object({
      currency_name: Yup.string().required("Please enter currency name"),
      currency_code: Yup.string().required("Please enter currency code"),
    }),
  });

  useEffect(() => {
    if (currencies.createData) {
      formik.resetForm();
    }
  }, [currencies.createData, formik]);

  return (
    <Modal
      show={showUpdateModal}
      onHide={() => {
        dispatch(resetCurrency());
        setShowUpdateModal(false);
        fetchCurrencies();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Currency
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currencies.createData !== null && (
          <Alert variant="success"> Currency updated successfully</Alert>
        )}
        {currencies.createError !== null && (
          <Alert variant="error">Unable to update Currency</Alert>
        )}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-12">Currency Name</label>
            <div className="col-md-12">
              <input
                name="currency_name"
                type="text"
                className="form-control"
                placeholder="Currency Name"
                onChange={formik.handleChange}
                value={formik.values.currency_name}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">Currency Code</label>
            <div className="col-md-12">
              <input
                name="currency_code"
                type="text"
                className="form-control"
                placeholder="Currency Code"
                onChange={formik.handleChange}
                value={formik.values.currency_code}
              />
            </div>
          </div>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(resetCurrency());
              setShowUpdateModal(false);
              fetchCurrencies();
            }}
          >
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
