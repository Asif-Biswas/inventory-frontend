import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar-wrapper">
            {/* Sidebar brand start  */}
            <div className="sidebar-brand">
                <a href="index.html" className="logo">
                    Tycöòn
                </a>
            </div>
            {/* Sidebar brand end  */}
            {/* User profile start */}
            <div className="sidebar-user-details">
                <div className="user-profile">
                    <img
                        src="img/user2.png"
                        className="profile-thumb"
                        alt="User Thumb"
                    />
                    <span className="status-label" />
                </div>
                <h6 className="profile-name">Yuki Hayashi</h6>
                <div className="profile-actions">
                    <a
                        href="account-settings.html"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Settings"
                    >
                        <i className="icon-settings1" />
                    </a>
                    <a
                        href="javascript:void(0)"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Twitter"
                    >
                        <i className="icon-twitter1" />
                    </a>
                    <a
                        href="login.html"
                        className="red"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Logout"
                    >
                        <i className="icon-power1" />
                    </a>
                </div>
            </div>
            {/* User profile end */}
            {/* Sidebar content start */}
            <div className="sidebar-content">
                {/* sidebar menu start */}
                <div className="sidebar-menu">
                    <ul>
                        <li className="sidebar-dropdown active">
                            <a href="#">
                                <i className="icon-home2" />
                                <span className="menu-text">Dashboards</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a
                                            href="/"
                                            className="current-page"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-calendar1" />
                                <span className="menu-text">Category</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/all-categories">
                                            View all categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/add-category">
                                            Add category
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-layers2" />
                                <span className="menu-text">Products</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/all-products">
                                            View all products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/add-product">
                                            Add product
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-layers2" />
                                <span className="menu-text">Stocks</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/all-stocks">
                                            All Stocks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/add-stock">
                                            Add Stock
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        
                        <li>
                            <a href="#">
                                <i className="icon-circular-graph" />
                                <span className="menu-text">Widgets</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* sidebar menu end */}
            </div>
            {/* Sidebar content end */}
        </nav>
    );
}
