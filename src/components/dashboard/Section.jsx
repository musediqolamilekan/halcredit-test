import React from "react";

const Section = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__start">
        <div>
          <h3 className="dashboard__heading">Spending insights</h3>
          <div className="dashboard__circle">
            <p>Total Spent</p>
            <h2>N1.4m</h2>
          </div>
        </div>
        <div className="dashboard__year">
          <div>
            <button>
              <span>January 2023</span>
              <i class="bx bx-chevron-down"></i>
            </button>
            <ul>
              <li>Airtime</li>
              <li>Salary</li>
              <li>Rent</li>
              <li>Purchase</li>
              <li>Other</li>
            </ul>
          </div>
          <div>
            <button>
              <span>Daily</span>
              <i class="bx bx-chevron-down"></i>
            </button>
            <ul>
              <li>38.6%</li>
              <li>22.5%</li>
              <li>30.8%</li>
              <li>8.1%</li>
              <li>8.1%</li>
            </ul>
          </div>
        </div>
        <div className="dashboard__close">X</div>
      </div>
      <div className="dashboard__end">
        <h3>Airtime & Internet</h3>
        <div>
          <p>Number</p>
          <h2>4</h2>
        </div>
        <div>
          <p>Average</p>
          <h2>N6,875</h2>
        </div>
        <div>
          <p>Total</p>
          <h2>N27,500</h2>
        </div>
        <div className="dashboard__close hytre">X</div>
      </div>
    </div>
  );
};

export default Section;
