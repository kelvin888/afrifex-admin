import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Layout } from "../../components/Layout";
import {
  deleteFxMarket,
  getAllFxMarket,
} from "../../redux/reducers/FxMarkets/apiCalls";
import { RootState } from "../../redux/store";
import EditImg from "../../assets/images/edit-icon.svg";
import { AddFxMarket } from "./Add";
import { UpdateFxMarket } from "./Edit";
import { fxMarketType } from "../../redux/reducers/FxMarkets/fxMarketState";
import { Button, Modal, Spinner } from "react-bootstrap";
import { resetFxMarket } from "../../redux/reducers/FxMarkets/fxMarketSlice";

export const FxMarkets = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const fxmarkets = useSelector((state: RootState) => state.fxmarkets);
  const [selectedMarket, setSelectedMarket] = useState<fxMarketType>();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetchFxMarkets();
  }, []);

  const fetchFxMarkets = () => {
    getAllFxMarket(dispatch);
  };

  const handleDelete = () => {
    if (selectedMarket) {
      deleteFxMarket(dispatch, selectedMarket?.id);
    }
  };

  const handleCloseDelete = () => {
    setShowConfirm(false);
    fetchFxMarkets();
    dispatch(resetFxMarket());
  };

  return (
    <Layout
      pageTitle="Fx Markets"
      breadcrumbName="Fx Markets"
      contentRight={
        <button
          className="btn btn-primary d-block text-center"
          onClick={() => setShowAddModal(true)}
        >
          + Add FX market
        </button>
      }
    >
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">All Fx Markets</h4>
        </div>
        <div className="box-body py-0">
          {fxmarkets.fetching ? (
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
                    <td>Date Created</td>
                    <td>Action</td>
                  </tr>
                  {fxmarkets?.fetchData.length > 0 ? (
                    <>
                      {fxmarkets.fetchData.map((cur: any, index: number) => (
                        <tr key={index}>
                          <td>{cur?.location_name}</td>
                          <td>
                            {moment(cur.createdAt).format("MMM, DD YYYY hh:mm")}
                          </td>
                          <td>
                            <div className="d-flex justify-content-around align-items-center">
                              <img
                                onClick={() => {
                                  setSelectedMarket(cur);
                                  setShowUpdateModal(true);
                                }}
                                className="edit-icon"
                                src={EditImg}
                                alt="edit img"
                              />

                              <div
                                onClick={() => {
                                  setShowConfirm(true);
                                  setSelectedMarket(cur);
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
                      <td colSpan={3}>No fx markets have been added</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddFxMarket
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          fetchFxMarkets={fetchFxMarkets}
        />
      )}
      {showUpdateModal && selectedMarket && (
        <UpdateFxMarket
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          fetchFxMarkets={fetchFxMarkets}
          selectedFxMarket={selectedMarket}
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
            {fxmarkets.deleteData !== null && (
              <div className="text-success">
                {fxmarkets.deleteData?.message}
              </div>
            )}
            {fxmarkets.deleteError !== null && (
              <div className="text-danger">Unable to delete rate</div>
            )}
            {fxmarkets.deleteData === null &&
              fxmarkets.deleteError === null &&
              "Delete Rate? There is no option to undo."}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end">
              <Button
                disabled={fxmarkets.deleting || fxmarkets.deleteData !== null}
                variant="secondary"
                onClick={() => handleCloseDelete()}
              >
                Cancel
              </Button>

              <Button
                disabled={fxmarkets.deleting || fxmarkets.deleteData !== null}
                type="button"
                onClick={handleDelete}
              >
                {fxmarkets.deleting ? (
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
