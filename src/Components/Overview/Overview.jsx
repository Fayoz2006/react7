import React, { useState, useEffect } from "react";
import { Widget } from "./Widget/Widget";
import axios from "axios";
import BTC_img from "./../../images/BTC.png";
import increase from "./../../images/increase.png";
import decrease from "./../../images/decrease.png";
import "./../../CSS/production/Overview.css";

export const Overview = () => {
  const [rates, setRates] = useState({});
  useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      if (res.status === 200 || res.status === 201) {
        setRates(res.data.rates);
      }
    });
  }, []);

  let arr = [
    {
      title: "BitCoin",
      img: BTC_img,
      background: "linear-gradient(237.07deg, #604392 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 BTC",
        to: `$30,000,000`,
      },
      smallItem: [
        {
          img: increase,
          amount: {
            a: "$1200 = 0,074btc",
            b: "1btc = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074btc",
            b: "1btc = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074btc",
            b: "1btc = $21490",
          },
        },
      ],
    },
    {
      title: "GridCoin",
      img: BTC_img,
      background: "linear-gradient(237.07deg, #D66168 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 GRC",
        to: `$30,000,000`,
      },
      smallItem: [
        {
          img: increase,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
      ],
    },
    {
      title: "Ethereum",
      img: BTC_img,
      background: "linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 ETH",
        to: `$30,000,000`,
      },
      smallItem: [
        {
          img: increase,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
      ],
    },
    {
      title: "Aeternity",
      img: BTC_img,
      background: "linear-gradient(237.07deg, #EB8338 -8.06%, #0F0B38 96.63%)",
      amount: {
        from: "600 AE",
        to: `$30,000,000`,
      },
      smallItem: [
        {
          img: increase,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
        {
          img: decrease,
          amount: {
            a: "$1200 = 0,074eth",
            b: "1eth = $21490",
          },
        },
      ],
    },
  ];
  return (
    <main>
      <div className="screen-overview">
        <div className="header">
          <div>
            <h1>Overview</h1>
            <span>26 August, Friday</span>
          </div>
          <button>Add Widget</button>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="balance">
              <b>Balance</b>
            </div>
            <div className="spending">
              <div className="top-side">
                <b>Spending</b>
                <span>January</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            {arr.map((item, index) => (
              <Widget key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
