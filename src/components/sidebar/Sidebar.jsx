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
                                            href="index.html"
                                            className="current-page"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboard2.html">
                                            Dashboard 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboard3.html">
                                            Dashboard 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboard4.html">
                                            Dashboard 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="widgets.html">
                                <i className="icon-circular-graph" />
                                <span className="menu-text">Widgets</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="graph-widgets.html"
                                className="current-page"
                            >
                                <i className="icon-line-graph" />
                                <span className="menu-text">Graph Widgets</span>
                            </a>
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
                                    <li>
                                        <a href="calendar-google.html">
                                            Google Calendar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="calendar-list-view.html">
                                            List View
                                        </a>
                                    </li>
                                    <li>
                                        <a href="calendar-selectable.html">
                                            Selectable
                                        </a>
                                    </li>
                                    <li>
                                        <a href="calendar-week-numbers.html">
                                            Week Numbers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-layers2" />
                                <span className="menu-text">Layouts</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="default-layout.html">
                                            Default Layout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-option1.html">
                                            Layout Option 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-option2.html">
                                            Layout Option 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="slim-sidebar.html">
                                            Slim Layout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-sidebar-mini.html">
                                            Sidebar Mini
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-daterange.html">
                                            Layout Daterange
                                        </a>
                                    </li>
                                    <li>
                                        <a href="cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="grid.html">Grid</a>
                                    </li>
                                    <li>
                                        <a href="grid-doc.html">Grid Doc</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-book-open" />
                                <span className="menu-text">Pages</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="account-settings.html">
                                            Account Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faq</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="invoice.html">Invoice</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing Plans</a>
                                    </li>
                                    <li>
                                        <a href="search-results.html">
                                            Search Results
                                        </a>
                                    </li>
                                    <li>
                                        <a href="timeline.html">Timeline</a>
                                    </li>
                                    <li>
                                        <a href="user-profile.html">
                                            User Profile
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-edit1" />
                                <span className="menu-text">Forms</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="datepickers.html">
                                            Datepickers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="editor.html">Editor</a>
                                    </li>
                                    <li>
                                        <a href="form-inputs.html">Inputs</a>
                                    </li>
                                    <li>
                                        <a href="input-groups.html">
                                            Input Groups
                                        </a>
                                    </li>
                                    <li>
                                        <a href="check-radio.html">
                                            Check Boxes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="input-masks.html">
                                            Input Masks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="input-tags.html">Input Tags</a>
                                    </li>
                                    <li>
                                        <a href="range-sliders.html">
                                            Range Sliders
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wizard.html">Wizards</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-box" />
                                <span className="menu-text">
                                    jQuery Components
                                </span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="accordion.html">Accordion</a>
                                    </li>
                                    <li>
                                        <a href="accordion-icons.html">
                                            Accordion Icons
                                        </a>
                                    </li>
                                    <li>
                                        <a href="accordion-arrows.html">
                                            Accordion Arrows
                                        </a>
                                    </li>
                                    <li>
                                        <a href="accordion-lg.html">
                                            Accordion Large
                                        </a>
                                    </li>
                                    <li>
                                        <a href="carousel.html">Carousels</a>
                                    </li>
                                    <li>
                                        <a href="modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="alerts.html">Notifications</a>
                                    </li>
                                    <li>
                                        <a href="tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-star2" />
                                <span className="menu-text">UI Elements</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="avatars.html">Avatars</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="button-groups.html">
                                            Button Groups
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dropdowns.html">Dropdowns</a>
                                    </li>
                                    <li>
                                        <a href="icons.html">Icons</a>
                                    </li>
                                    <li>
                                        <a href="jumbotron.html">Jumbotron</a>
                                    </li>
                                    <li>
                                        <a href="labels-badges.html">
                                            Labels &amp; Badges
                                        </a>
                                    </li>
                                    <li>
                                        <a href="list-items.html">List Items</a>
                                    </li>
                                    <li>
                                        <a href="pagination.html">
                                            Paginations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="progress.html">
                                            Progress Bars
                                        </a>
                                    </li>
                                    <li>
                                        <a href="pills.html">Pills</a>
                                    </li>
                                    <li>
                                        <a href="spinners.html">Spinners</a>
                                    </li>
                                    <li>
                                        <a href="typography.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="images.html">Thumbnails</a>
                                    </li>
                                    <li>
                                        <a href="text-avatars.html">
                                            Text Avatars
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-border_all" />
                                <span className="menu-text">Tables</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="data-tables.html">
                                            Data Tables
                                        </a>
                                    </li>
                                    <li>
                                        <a href="custom-tables.html">
                                            Custom Tables
                                        </a>
                                    </li>
                                    <li>
                                        <a href="default-table.html">
                                            Default Table
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-bordered.html">
                                            Table Bordered
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-hover.html">
                                            Table Hover
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-striped.html">
                                            Table Striped
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-small.html">
                                            Table Small
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-colors.html">
                                            Table Colors
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-pie-chart1" />
                                <span className="menu-text">Graphs</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="apex-graphs.html">
                                            Apex Graphs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="morris-graphs.html">
                                            Morris Graphs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="vector-maps.html">
                                            Vector Maps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="icon-unlock" />
                                <span className="menu-text">
                                    Authentication
                                </span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Signup</a>
                                    </li>
                                    <li>
                                        <a href="forgot-pwd.html">
                                            Forgot Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="error.html">404</a>
                                    </li>
                                    <li>
                                        <a href="error2.html">505</a>
                                    </li>
                                    <li>
                                        <a href="coming-soon.html">
                                            Coming Soon
                                        </a>
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
