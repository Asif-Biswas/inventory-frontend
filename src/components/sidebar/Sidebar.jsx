import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({dashboardInfo}) {
    return (
        <nav id="sidebar" className="sidebar-wrapper">
            {/* Sidebar brand start  */}
            <div className="sidebar-brand">
                <a href="/" className="logo">
                    Cloud Script
                </a>
            </div>
            {/* Sidebar brand end  */}
            {/* User profile start */}
            <div className="sidebar-user-details">
                <div className="user-profile">
                    <img
                        src="img/user.jpg"
                        className="profile-thumb"
                        alt="User Thumb"
                    />
                    <span className="status-label" />
                </div>
                <h6 className="profile-name">
                    {dashboardInfo?.user?.name}
                    <p className="text-muted">{dashboardInfo?.organisation?.name}</p>
                </h6>
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
                                    <li>
                                        <Link to="/facility-level-stock">
                                            Facility Level
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/running-out">
                                            Running Out
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/stock-out">
                                            Stock Out
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        
                        <li className="sidebar-dropdown">
                            <a href="#">
                            <i className="icon-circular-graph" />
                                <span className="menu-text">Sell</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/all-sales">All sales</Link>
                                    </li>
                                    <li>
                                        <Link to="/top-sales">Top sales</Link>
                                    </li>
                                    <li>
                                        <Link to="/add-sell">Add Sell</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-layers2" />
                                <span className="menu-text">Facility</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/all-facilities">
                                            View all facilities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/add-facility">
                                            Add facility
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* sidebar menu end */}
            </div>
            {/* Sidebar content end */}
        </nav>
    );
}
