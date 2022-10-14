import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import FeedBack from "./panel/FeedBack";
import Notification from "./panel/Notification";

const Dashboard = () => {

  return (

    <div style={{height:'100vh'}}>

    <h1 >DashBoard</h1>
      <nav
        
        class="navbar p-0"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div   class="container">
          <div className="d-flex">
            <Link to="notification" style={{ color: "black", textDecoration: "none" }}>
              <button
                className="mt-1"
                style={{ fontSize: 12, fontWeight: 400, cursor: "pointer", border:'none' }}
              >
               Notification
              </button>
            </Link>
            <Link to="feedback" style={{ color: "black", textDecoration: "none" }}>
            <button 
            className="mt-1" style={{ fontSize: 12, fontWeight: 400, cursor: "pointer",border:'none' }}>
                Feedback
            </button>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </nav>
      <div>
        <Routes>
          <Route path="feedback" element={<FeedBack />} />
          <Route path="notification" element={<Notification />} />
        </Routes>
      </div>


    </div>
  );
};

export default Dashboard;
