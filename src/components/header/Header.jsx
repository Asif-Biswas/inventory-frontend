import React from "react";

export default function Header({dashboardInfo}) {
    return (
        <header className="header">
            <div className="toggle-btns">
                <a id="toggle-sidebar" href="#">
                    <i className="icon-menu" />
                </a>
                <a id="pin-sidebar" href="#">
                    <i className="icon-menu" />
                </a>
            </div>
            <div className="header-items">
                {/* Custom search start */}
                <div className="custom-search">
                    <input
                        type="text"
                        className="search-query"
                        placeholder="Search here ..."
                    />
                    <i className="icon-search1" />
                </div>
                {/* Custom search end */}
                {/* Header actions start */}
                <ul className="header-actions">
                    <li className="dropdown d-none d-sm-block">
                        <a
                            href="#"
                            id="notifications"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                        >
                            <i className="icon-calendar1" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right lrg"
                            aria-labelledby="notifications"
                        >
                            <div className="dropdown-menu-header">
                                Events (10)
                            </div>
                            <ul className="header-notifications">
                                <li>
                                    <a href="#">
                                        <div className="user-img away">
                                            <img
                                                src="img/user6.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Abbott
                                            </div>
                                            <div className="noti-details">
                                                Membership has been ended.
                                            </div>
                                            <div className="noti-date">
                                                Oct 20, 07:30 pm
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="user-img busy">
                                            <img
                                                src="img/user13.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Braxten
                                            </div>
                                            <div className="noti-details">
                                                Approved new design.
                                            </div>
                                            <div className="noti-date">
                                                Oct 10, 12:00 am
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="user-img online">
                                            <img
                                                src="img/user19.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Larkyn
                                            </div>
                                            <div className="noti-details">
                                                Check out every table in detail.
                                            </div>
                                            <div className="noti-date">
                                                Oct 15, 04:00 pm
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="dropdown d-none d-sm-block">
                        <a
                            href="#"
                            id="notifications"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                        >
                            <i className="icon-bell" />
                            <span className="count-label" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right lrg"
                            aria-labelledby="notifications"
                        >
                            <div className="dropdown-menu-header">
                                Notifications (40)
                            </div>
                            <ul className="header-notifications">
                                <li>
                                    <a href="#">
                                        <div className="user-img away">
                                            <img
                                                src="img/user21.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Abbott
                                            </div>
                                            <div className="noti-details">
                                                Membership has been ended.
                                            </div>
                                            <div className="noti-date">
                                                Oct 20, 07:30 pm
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="user-img busy">
                                            <img
                                                src="img/user10.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Braxten
                                            </div>
                                            <div className="noti-details">
                                                Approved new design.
                                            </div>
                                            <div className="noti-date">
                                                Oct 10, 12:00 am
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="user-img online">
                                            <img
                                                src="img/user6.png"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="details">
                                            <div className="user-title">
                                                Larkyn
                                            </div>
                                            <div className="noti-details">
                                                Check out every table in detail.
                                            </div>
                                            <div className="noti-date">
                                                Oct 15, 04:00 pm
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown user-settings">
                        <a
                            href="#"
                            id="userSettings"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                        >
                            <img
                                src="img/user.jpg"
                                className="user-avatar"
                                alt="Avatar"
                            />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="userSettings"
                        >
                            <div className="header-profile-actions">
                                <div className="header-user-profile">
                                    <div className="header-user">
                                        <img
                                            src="img/user.jpg"
                                            alt="Admin Template"
                                        />
                                    </div>
                                    <h5>{dashboardInfo?.user?.name}</h5>
                                    <p>{dashboardInfo?.organisation?.name}</p>
                                </div>
                                <a href="#">
                                    <i className="icon-user1" /> My Profile
                                </a>
                                <a href="#">
                                    <i className="icon-settings1" /> Account
                                    Settings
                                </a>
                                <a href="/#" 
                                    onClick={() => {
                                        localStorage.removeItem("inventory-token");
                                        window.location.href = "/";
                                    }}
                                >
                                    <i className="icon-log-out1" /> Sign Out
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                {/* Header actions end */}
            </div>
        </header>
    );
}
