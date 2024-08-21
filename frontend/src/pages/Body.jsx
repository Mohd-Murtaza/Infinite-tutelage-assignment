import React from "react";
import Navbar from "../components/Navbar";
import QuickLinks from "../components/QuickLinks";
import Chart from "../components/Chart";
import TradingAccounts from "../components/TradingAccounts";
import "../styles/body.css"
import OpenTrades from "../components/OpenTrades";

const Body = () => {
  return (
    <div className="bodyMainContainer">
      <Navbar />
      <div className="bodyMainInnerContainer">
        <div className="boddyInner1Div">
          <QuickLinks />
          <Chart />
        </div> 
        <div className="boddyInner2Div">
          <TradingAccounts/>
          <OpenTrades/>
        </div>
      </div>
    </div>
  );
};

export default Body;
