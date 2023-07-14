import React from "react";
import "./modal.css";

const Modal = ({ closeModal, selectedTransaction }) => {
  return (
    <div className="modal">
      <div className="modal__close" onClick={closeModal}>
        <i class="bx bx-chevron-left"></i>
        <span>Back</span>
      </div>
      <div className="modal__wrapper">
        <div className="modal__box">
          <div className="modal__box-topper">
            <img src={selectedTransaction?.imageURL} alt="tt" />
            <h3>-N{selectedTransaction?.amount}</h3>
            <p>{selectedTransaction?.name}</p>
          </div>
          <form>
            <div>
              <label htmlFor="type">Type</label>
              <input
                type="text"
                placeholder={selectedTransaction?.type}
                value={selectedTransaction?.type}
                disabled
              />
              <i class="bx bx-chevron-down"></i>
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="text"
                placeholder={selectedTransaction?.date}
                value={selectedTransaction?.date}
                disabled
              />
              <i class="bx bx-calendar"></i>
            </div>
            <div>
              <label htmlFor="type">Reference ID</label>
              <input
                type="text"
                placeholder={selectedTransaction?.refID}
                value={selectedTransaction?.refID}
                disabled
              />
            </div>
            <div>
              <label htmlFor="type">Status</label>
              <input
                type="text"
                placeholder="Successful"
                value="Successful"
                disabled
              />
            </div>
            <button>Download Receipt</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
