import React from "react";

const SideBar = ({ handleClick, list, clicked }) => {
  return (
    <div className="sideBar">
      <div className="sideBar__logo">
        <h1>halcredit</h1>
      </div>
      <ul className="sideBar__items">
        {list.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleClick(item.text)}
            className={`sideBar__list ${clicked === item.text ? "active" : ""}`}
          >
            <i className={item.icon}></i>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="sideBar__bottom">
        <ul className="sideBar__items">
          <li className="sideBar__list">
            <i class="bx bxs-phone-call"></i>
            <span>Support</span>
          </li>
          <li className="sideBar__list">
            <i class="bx bx-log-out"></i>
            <span>Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
