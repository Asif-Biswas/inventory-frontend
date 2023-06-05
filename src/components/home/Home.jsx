import React from "react";

export default function Home() {
    return (
        <div className="main-container">
            {/* Page header start */}
            <div className="page-header">
                {/* Breadcrumb start */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Admin Dashboard</li>
                </ol>
                {/* Breadcrumb end */}
                {/* App actions start */}
                <div className="app-actions">
                    <button type="button" className="btn">
                        Today
                    </button>
                    <button type="button" className="btn">
                        Yesterday
                    </button>
                    <button type="button" className="btn">
                        7 days
                    </button>
                    <button type="button" className="btn">
                        15 days
                    </button>
                    <button type="button" className="btn active">
                        30 days
                    </button>
                </div>
                {/* App actions end */}
            </div>
            {/* Page header end */}
            {/* Row start */}
            <div className="row gutters">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="info-stats2">
                        <div className="info-icon info">
                            <i className="icon-eye1" />
                        </div>
                        <div className="sale-num">
                            <h3>32,589</h3>
                            <p>Visitors</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="info-stats2">
                        <div className="info-icon danger">
                            <i className="icon-shopping-cart1" />
                        </div>
                        <div className="sale-num">
                            <h3>27,837</h3>
                            <p>Orders</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="info-stats2">
                        <div className="info-icon warning">
                            <i className="icon-shopping-bag1" />
                        </div>
                        <div className="sale-num">
                            <h3>43,456</h3>
                            <p>Sales</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="info-stats2">
                        <div className="info-icon success">
                            <i className="icon-activity" />
                        </div>
                        <div className="sale-num">
                            <h3>29,425</h3>
                            <p>Expenses</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row end */}
            {/* Row end */}
        </div>
    );
}
