import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";
import DashboardData from "../assets/DashboardData/DashboardData";
import SalesAndRevenueChart from "./SalesAndRevenueChart";

const Dashboard = () => {
  const [Dashboard, setDashboard] = useState({})

  useEffect(()=>{
    setDashboard(DashboardData)
  },[])

  return (
    <>
      <PageHeader PageTitle={"Dashboard"} />
      <div className="dashboard-section set-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="cards">
                <div className="card">
                  <div className="card-number">
                    {
                      Dashboard && Dashboard.userCount
                    }
                  </div>
                  <div className="card-text">
                    Users
                  </div>
                </div>
                <div className="card">
                  <div className="card-number">
                    {
                      Dashboard && Dashboard.productCount
                    }
                  </div>
                  <div className="card-text">
                    Products
                  </div>
                </div>
                <div className="card">
                  <div className="card-number">
                    {
                      Dashboard && Dashboard.salesCount
                    }
                  </div>
                  <div className="card-text">
                    Sales number
                  </div>
                </div>
                <div className="card">
                  <div className="card-number">
                    {
                      Dashboard && Dashboard.totalRevenue
                    }
                  </div>
                  <div className="card-text">
                    Total revenue
                  </div>
                </div>
              </div>
              <SalesAndRevenueChart Revenue={Dashboard.revenue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
