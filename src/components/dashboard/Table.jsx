import React from "react";
import data from "../../data/data";

export default function Table({openModal}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount(#)</th>
            <th>Ref ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 4).map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.imageURL} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>{item.category}</td>
              <td>{item.type}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.amount}</td>
              <td>{item.refID}</td>
              <td>
                <button onClick={() => openModal(item)}>{item.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
