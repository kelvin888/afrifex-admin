import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Layout } from "../../components/Layout";
import { deleteCurrency, getAllCurrency } from "../../redux/reducers/Currencies/apiCalls";
import { RootState } from "../../redux/store";
import EditImg from "../../assets/images/edit-icon.svg";
import { AddCurrency } from "./Add";
import { UpdateAgentCategory } from "./Edit";
import { currencyType } from "../../redux/reducers/Currencies/currencyState";
import { Button, Modal, Spinner } from "react-bootstrap";
import { resetCurrency } from "../../redux/reducers/Currencies/currencySlice";

export const Currencies = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const currencies = useSelector((state: RootState) => state.currencies);

  const [selectedCurrency, setSelectedCurrency] = useState<currencyType>();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = () => {
    getAllCurrency(dispatch);
  };

  const handleDelete = () => {
    if (selectedCurrency) {
      deleteCurrency(dispatch, selectedCurrency?.id);
    }
  };

  const handleCloseDelete = () => {
    setShowConfirm(false);
    fetchCurrencies();
    dispatch(resetCurrency());
  };

  return (
    <Layout
      pageTitle="Currencies"
      breadcrumbName="Currencies"
      contentRight={
        <button
          className="btn btn-primary d-block text-center"
          onClick={() => setShowAddModal(true)}
        >
          + Add Currency
        </button>
      }
    >
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">All Currencies</h4>
        </div>
        <div className="box-body py-0">
          {currencies.fetching ? (
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <Skeleton height={20} count={5} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Code</td>
                    <td>Date Created</td>
                    <td>Action</td>
                  </tr>
                  {currencies?.fetchData.length > 0 ? (
                    <>
                      {currencies.fetchData.map((cur, index) => (
                        <tr key={index}>
                          <td>{cur?.currency_name}</td>
                          <td>{cur?.currency_code}</td>
                          <td>
                            {moment(cur.createdAt).format("MMM, DD YYYY hh:mm")}
                          </td>
                          <td>
                            <div className="d-flex justify-content-around align-items-center">
                              <img
                                onClick={() => {
                                  setSelectedCurrency(cur);
                                  setShowUpdateModal(true);
                                }}
                                className="edit-icon"
                                src={EditImg}
                                alt="edit img"
                              />

                              <div
                                onClick={() => {
                                  setShowConfirm(true);
                                  setSelectedCurrency(cur);
                                }}
                                className="text-danger d-flex align-items-center"
                                data-toggle="tooltip"
                                data-original-title="Delete"
                              >
                                <i className="ti-trash" aria-hidden="true"></i>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <tr>
                      <td colSpan={3}>No Currencies have been added</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddCurrency
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          fetchCurrencies={fetchCurrencies}
        />
      )}
      {showUpdateModal && selectedCurrency && (
        <UpdateAgentCategory
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          fetchCurrencies={fetchCurrencies}
          selectedCurrency={selectedCurrency}
        />
      )}

      {showConfirm && (
        <Modal
          show={showConfirm}
          onHide={() => handleCloseDelete()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currencies.deleteData !== null && (
              <div className="text-success">{currencies.deleteData?.message}</div>
            )}
            {currencies.deleteError !== null && (
              <div className="text-danger">Unable to delete rate</div>
            )}
            {currencies.deleteData === null &&
              currencies.deleteError === null &&
              "Delete Rate? There is no option to undo."}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end">
              <Button
                disabled={currencies.deleting || currencies.deleteData !== null}
                variant="secondary"
                onClick={() => handleCloseDelete()}
              >
                Cancel
              </Button>

              <Button
                disabled={currencies.deleting || currencies.deleteData !== null}
                type="button"
                onClick={handleDelete}
              >
                {currencies.deleting ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "OK"
                )}
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </Layout>
  );
};
