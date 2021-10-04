import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCurrency } from "../../../redux/reducers/Currencies/currencySlice";
import { createCurrency } from "../../../redux/reducers/Currencies/apiCalls";
import * as Yup from "yup";
import { RootState } from "../../../redux/store";

interface aProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  showAddModal: boolean;
  fetchCurrencies: Function;
}
export const AddCurrency: FC<aProps> = (props) => {
  const dispatch = useDispatch();
  const { setShowAddModal, showAddModal, fetchCurrencies } = props;
  const currencies = useSelector((state: RootState) => state.currencies);

  const formik = useFormik({
    initialValues: {
      currency_name: "",
      currency_code: "",
    },
    onSubmit: (values) => {
      createCurrency(dispatch, values);
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
      show={showAddModal}
      onHide={() => {
        dispatch(resetCurrency());
        setShowAddModal(false);
        fetchCurrencies();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Currency
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currencies.createData !== null && (
          <Alert variant="success">New Currency added successfully</Alert>
        )}
        {currencies.createError !== null && (
          <Alert variant="error">Unable to add Currency</Alert>
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
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(resetCurrency());
              setShowAddModal(false);
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
