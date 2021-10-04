import React from 'react'

export const ControlSidebar = () => {
    return (
        <aside className="control-sidebar">
            <div className="rpanel-title">
                <span className="waves-effect waves-light pull-right btn btn-circle btn-danger">
                    <i
                        className="ion ion-close text-white"
                        data-toggle="control-sidebar"
                    ></i>
                </span>{" "}
            </div>
            {/* <!-- Create the tabs --> */}
            <ul className="nav nav-tabs control-sidebar-tabs">
                <li className="nav-item">
                    <a
                        href="#control-sidebar-home-tab"
                        data-toggle="tab"
                        title="Notifications"
                    >
                        <i className="ti-comment-alt"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#control-sidebar-settings-tab"
                        data-toggle="tab"
                        title="Comments"
                    >
                        <i className="ti-tag"></i>
                    </a>
                </li>
            </ul>
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
                {/* <!-- Home tab content --> */}
                <div className="tab-pane" id="control-sidebar-home-tab">
                    <div className="lookup lookup-sm lookup-right d-none d-lg-block mb-20">
                        <input
                            type="text"
                            name="s"
                            placeholder="Search"
                            className="w-p100"
                        />
                    </div>
                    <div className="media-list media-list-hover">
                        <a className="media media-single" href="#">
                            <h4 className="w-50 text-gray font-weight-500">10:10</h4>
                            <div className="media-body pl-15 bl-5 rounded border-primary">
                                <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                <span className="text-fade">by Johne</span>
                            </div>
                        </a>

                        <a className="media media-single" href="#">
                            <h4 className="w-50 text-gray font-weight-500">08:40</h4>
                            <div className="media-body pl-15 bl-5 rounded border-success">
                                <p>Proin iaculis eros non odio ornare efficitur.</p>
                                <span className="text-fade">by Amla</span>
                            </div>
                        </a>

                        <a className="media media-single" href="#">
                            <h4 className="w-50 text-gray font-weight-500">07:10</h4>
                            <div className="media-body pl-15 bl-5 rounded border-info">
                                <p>In mattis mi ut posuere consectetur.</p>
                                <span className="text-fade">by Josef</span>
                            </div>
                        </a>

                        <a className="media media-single" href="#">
                            <h4 className="w-50 text-gray font-weight-500">01:15</h4>
                            <div className="media-body pl-15 bl-5 rounded border-danger">
                                <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                <span className="text-fade">by Rima</span>
                            </div>
                        </a>

                        <a className="media media-single" href="#">
                            <h4 className="w-50 text-gray font-weight-500">23:12</h4>
                            <div className="media-body pl-15 bl-5 rounded border-warning">
                                <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                <span className="text-fade">by Alaxa</span>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <!-- /.tab-pane --> */}
                {/* <!-- Settings tab content --> */}
                <div className="tab-pane" id="control-sidebar-settings-tab">
                    <div className="media-list media-list-hover media-list-divided">
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/1.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Carter</strong>{" "}
                                    <span className="float-right">33 min ago</span>
                                </p>
                                <p>Cras tempor diam nec metus...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (22)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/2.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Nicholas</strong>{" "}
                                    <span className="float-right">11 hour ago</span>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (23)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/1.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Carter</strong>{" "}
                                    <span className="float-right">33 min ago</span>
                                </p>
                                <p>Cras tempor diam nec...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (22)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/2.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Nicholas</strong>{" "}
                                    <span className="float-right">11 hour ago</span>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (23)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/1.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Carter</strong>{" "}
                                    <span className="float-right">33 min ago</span>
                                </p>
                                <p>Cras tempor diam nec metus...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (22)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/2.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Nicholas</strong>{" "}
                                    <span className="float-right">11 hour ago</span>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (23)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/1.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Carter</strong>{" "}
                                    <span className="float-right">33 min ago</span>
                                </p>
                                <p>Cras tempor diam nec...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (22)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="media">
                            <img
                                className="avatar avatar-lg"
                                src="../images/avatar/2.jpg"
                                alt="..."
                            />

                            <div className="media-body">
                                <p>
                                    <strong>Nicholas</strong>{" "}
                                    <span className="float-right">11 hour ago</span>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <div className="media-block-actions">
                                    <nav className="nav nav-dot-separated no-gutters">
                                        <div className="nav-item">
                                            <a className="nav-link text-success" href="#">
                                                <i className="fa fa-thumbs-up"></i> (17)
                        </a>
                                        </div>
                                        <div className="nav-item">
                                            <a className="nav-link text-danger" href="#">
                                                <i className="fa fa-thumbs-down"></i> (23)
                        </a>
                                        </div>
                                    </nav>

                                    <nav className="nav no-gutters gap-2 font-size-16 media-hover-show">
                                        <a
                                            className="nav-link text-success"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Approve"
                                        >
                                            <i className="ion-checkmark"></i>
                                        </a>
                                        <a
                                            className="nav-link text-danger"
                                            href="#"
                                            data-toggle="tooltip"
                                            title=""
                                            data-original-title="Delete"
                                        >
                                            <i className="ion-close"></i>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.tab-pane --> */}
            </div>
        </aside>
    )
}
