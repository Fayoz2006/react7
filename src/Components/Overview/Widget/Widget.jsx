import React from "react";

export const Widget = ({ item }) => {
  return (
    <div className="item" style={{background: item.background}}>
      <b className="title">{item.title}</b>
      <div className="info">
        <div className="left-side">
          <img src={item.img} alt="" />
          <div className="amount">
            <b>{item.amount.from}</b>
            <p>{item.amount.to}</p>
          </div>
        </div>
        <div className="right-side">
          {item.smallItem.map((element, index) => (
            <div className="small-item" key={index}>
              <img src={element.img} alt="" />
              <div className="info">
                <b>{element.amount.a}</b>
                <p>{element.amount.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
