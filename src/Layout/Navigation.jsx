import React from "react";
import SVGicons from './../Components/SVG/SVGicons'
import './../CSS/production/Navigation.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="top-side">
        <div className="title">
          <h1>VALUET</h1>
          <div className="line"></div>
        </div>
        <div className="options">
          <Link to={`/overview`}>
            <SVGicons icon="overview" />
            <span>Overview</span>
          </Link>
          <Link to={`/wallets`}>
            <SVGicons icon="wallets" />
            <span>Wallets</span>
          </Link>
          <Link to={`/transictions`}>
            <SVGicons icon="transictions" />
            <span>Transictions</span>
          </Link>
          <Link to={`/exchange`} className="active">
            <SVGicons icon="exchange" />
            <span>Exchange</span>
          </Link>
          <Link to={`/market`}>
            <SVGicons icon="market" />
            <span>Market</span>
          </Link>
        </div>
      </div>
      <div className="bottom-side">
        <div className="user">
          <div></div>
          <span>Mike Jakson</span>
        </div>
        <div className="logOut">
          <SVGicons icon="logOut" />
          <span>Log out</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
