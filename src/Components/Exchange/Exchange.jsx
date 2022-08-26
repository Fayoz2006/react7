import React, { useState, useEffect } from "react";
import "./../../CSS/production/Exchange.css";
import "./../SVG/SVGicons";
import SVGicons from "./../SVG/SVGicons";
import axios from "axios";

const Exchange = () => {
  const [currency1, setCurrency1] = useState("AED");
  const [currency2, setCurrency2] = useState("AED");
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      if (res.status === 200 || res.status === 201) {
        setRates(res.data.rates);
      }
    });
  }, []);

  function handleChangeAmount1(amount1) {
    setAmount2(+((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleChangeCurrency1(currency1) {
    setAmount2(+((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  // function handleChangeAmount2(amount2) {
  //   setAmount1(+((amount2 * rates[currency1]) / rates[currency2]));
  //   setAmount2(amount2);
  // }

  function handleChangeCurrency2(currency2) {
    setAmount2(+((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <main>
      <div className="screen-exchange">
        <h1>Exchange</h1>
        <div className="currency">
          <div className="item">
            <p>From</p>
            <div className="calculate">
              <div className="valuet">
                <select
                  onChange={(event) =>
                    handleChangeCurrency1(event.target.value)
                  }
                  className="choose-valuet"
                >
                  {Object.keys(rates).map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <img
                  src={`https://countryflagsapi.com/png/${currency1
                    .slice(0, 2)
                    .toLowerCase()}`}
                  alt=""
                />
              </div>
              <form>
                <input
                  type="number"
                  value={amount1}
                  onChange={(event) => handleChangeAmount1(event.target.value)}
                />
                <span>{currency1}</span>
              </form>
            </div>
          </div>
          <div className="item">
            <p>To</p>
            <div className="calculate">
              <div className="valuet">
                <select
                  onChange={(event) =>
                    handleChangeCurrency2(event.target.value)
                  }
                  className="choose-valuet"
                >
                  {Object.keys(rates).map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <img
                  src={`https://countryflagsapi.com/png/${currency2
                    .slice(0, 2)
                    .toLowerCase()}`}
                  alt=""
                />
              </div>
              <form>
                <input
                  disabled
                  type="number"
                  value={amount2}
                  // onChange={(event) => handleChangeAmount2(event.target.value)}
                />
                <span>{currency2}</span>
              </form>
            </div>
          </div>
        </div>
        <div className="result">
          <div>
            <b>{amount1}</b>
            <b>{currency1}</b>
          </div>
          <SVGicons icon="arrow" />
          <div>
            <b>{amount2}</b>
            <b>{currency2}</b>
          </div>
        </div>
        <button className="exchange">Exchange</button>
      </div>
    </main>
  );
};

export default Exchange;
