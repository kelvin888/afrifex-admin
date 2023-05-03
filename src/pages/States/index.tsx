import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Layout } from "../../components/Layout";
import {
  deleteState,
  getAllStates,
} from "../../redux/reducers/States/apiCalls";
import { RootState } from "../../redux/store";
import EditImg from "../../assets/images/edit-icon.svg";
import { AddState } from "./Add";
import { UpdateAgentCategory } from "./Edit";
import { stateType } from "../../redux/reducers/States/stateState";
import { Button, Modal, Spinner } from "react-bootstrap";
import { resetState } from "../../redux/reducers/States/stateSlice";

export const States = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const states = useSelector((state: RootState) => state.states);
  const [selectedState, setSelectedState] = useState<stateType>();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = () => {
    getAllStates(dispatch);
  };

  const handleDelete = () => {
    if (selectedState) {
      deleteState(dispatch, selectedState?.id);
    }
  };

  const handleCloseDelete = () => {
    setShowConfirm(false);
    fetchStates();
    dispatch(resetState());
  };

  return (
    <Layout
      pageTitle="States"
      breadcrumbName="States"
      contentRight={
        <button
          className="btn btn-primary d-block text-center"
          onClick={() => setShowAddModal(true)}
        >
          + Add State
        </button>
      }
    >
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">All States</h4>
        </div>
        <div className="box-body py-0">
          {states.fetching ? (
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
                  {states?.fetchData.length > 0 ? (
                    <>
                      {states.fetchData.map((cur, index) => (
                        <tr key={index}>
                          <td>{cur?.state_name}</td>
                          <td>
                            {moment(cur.createdAt).format("MMM, DD YYYY hh:mm")}
                          </td>
                          <td>
                            <div className="d-flex justify-content-around align-items-center">
                              <img
                                onClick={() => {
                                  setSelectedState(cur);
                                  setShowUpdateModal(true);
                                }}
                                className="edit-icon"
                                src={EditImg}
                                alt="edit img"
                              />

                              <div
                                onClick={() => {
                                  setShowConfirm(true);
                                  setSelectedState(cur);
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
                      <td colSpan={3}>No States have been added</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddState
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          fetchStates={fetchStates}
        />
      )}
      {showUpdateModal && selectedState && (
        <UpdateAgentCategory
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          fetchStates={fetchStates}
          selectedState={selectedState}
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
            {states.deleteData !== null && (
              <div className="text-success">{states.deleteData?.message}</div>
            )}
            {states.deleteError !== null && (
              <div className="text-danger">Unable to delete rate</div>
            )}
            {states.deleteData === null &&
              states.deleteError === null &&
              "Delete Rate? There is no option to undo."}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-end">
              <Button
                disabled={states.deleting || states.deleteData !== null}
                variant="secondary"
                onClick={() => handleCloseDelete()}
              >
                Cancel
              </Button>

              <Button
                disabled={states.deleting || states.deleteData !== null}
                type="button"
                onClick={handleDelete}
              >
                {states.deleting ? (
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
