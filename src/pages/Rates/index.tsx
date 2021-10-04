import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Layout } from "../../components/Layout";
import { deleteRate, getAllRates } from "../../redux/reducers/Rates/apiCalls";
import { RootState } from "../../redux/store";
import EditImg from "../../assets/images/edit-icon.svg";
import { AddRate } from "./Add";
import { UpdateRate } from "./Edit";
import { rateFetchType } from "../../redux/reducers/Rates/ratesState";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import json5 from "json5";
import { resetRate } from "../../redux/reducers/Rates/rateSlice";

export const Rates = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const rates = useSelector((state: RootState) => state.rates);

  const [selectedRate, setSelectedRate] = useState<rateFetchType>();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = () => {
    getAllRates(dispatch);
  };

  const handleDelete = () => {
    if (selectedRate) {
      deleteRate(dispatch, selectedRate?.id);
    }
  };

  const handleCloseDelete = () => {
    setShowConfirm(false);
    fetchRates();
    dispatch(resetRate());
  };

  return (
    <Layout
      pageTitle="Rates"
      breadcrumbName="Rates"
      contentRight={
        <button
          className="btn btn-primary d-block text-center"
          onClick={() => setShowAddModal(true)}
        >
          + Add Rate
        </button>
      }
    >
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">All Rates</h4>
        </div>
        <div className="box-body py-0">
          {rates.fetching ? (
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
                    <td>Location</td>
                    <td>Rate</td>
                    <td>Date Created</td>
                    <td>Exchange</td>
                    <td>Action</td>
                  </tr>
                  {rates?.fetchData.length > 0 ? (
                    <>
                      {rates.fetchData.map((rate, index) => (
                        <tr key={index}>
                          <td>{rate?.fx_market?.location_name}</td>
                          <td>{rate?.conversion_rate}</td>
                          <td>{`${rate?.currency_from?.currency_code} -> ${rate.currency_to?.currency_code}`}</td>
                          <td>
                            {moment(rate.createdAt).format(
                              "MMM, DD YYYY hh:mm"
                            )}
                          </td>
                          <td>
                            <div className="d-flex justify-content-around align-items-center">
                              <img
                                onClick={() => {
                                  setSelectedRate(rate);
                                  setShowUpdateModal(true);
                                }}
                                className="edit-icon"
                                src={EditImg}
                                alt="edit img"
                              />

                              <div
                                onClick={() => {
                                  setShowConfirm(true);
                                  setSelectedRate(rate);
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
                      <td colSpan={3}>No Rates have been added</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddRate
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          fetchRates={fetchRates}
        />
      )}
      {showUpdateModal && selectedRate && (
        <UpdateRate
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          fetchRates={fetchRates}
          selectedRate={selectedRate}
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
            {rates.deleteData !== null && (
              <div className="text-success">{rates.deleteData?.message}</div>
            )}
            {rates.deleteError !== null && (
              <div className="text-danger">Unable to delete rate</div>
            )}
            {rates.deleteData === null &&
              rates.deleteError === null &&
              "Delete Rate? There is no option to undo."}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end">
              <Button
                disabled={rates.deleting || rates.deleteData !== null}
                variant="secondary"
                onClick={() => handleCloseDelete()}
              >
                Cancel
              </Button>

              <Button
                disabled={rates.deleting || rates.deleteData !== null}
                type="button"
                onClick={handleDelete}
              >
                {rates.deleting ? (
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
