import React, { useState, useMemo } from "react";
import Pagination from "../pagination/Pagination";
import data from "../../data/data";

let PageSize = 8;

export default function DataTable({ openModal }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <button className="data__button">
        <i class="bx bxs-doughnut-chart"></i>
        <span>View spending insights</span>
      </button>
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
          {currentTableData.map((item, index) => (
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
