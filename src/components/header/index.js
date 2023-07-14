/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

const Header = ({ pageTitle }) => {
  return (
    <header className="header">
      <div className="header__start">
        <h2 className="header__title">{pageTitle}</h2>
      </div>
      <div className="header__middle">
        <i class="bx bx-search"></i>
        <input
          type="text"
          className="header__search"
          placeholder="Search transaction, invoice, customer, supplier and inventory"
        />
      </div>
      <div className="header__end">
        <div className="header__notify">
          <i class="bx bx-bell"></i>
        </div>
        <div className="header__profile">
          <div className="header__img">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creation-hill-1681010.jpg&fm=jpg"
              alt="user"
            />
          </div>
          <div className="header__profile-text">
            <span>Kabirah Aderemi</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
