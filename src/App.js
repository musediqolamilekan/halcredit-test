import React from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import Transaction from "./components/transactions";
import Dashboard from "./components/dashboard";
import list from "./data/menu";
import Modal from "./components/modal";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedTransaction, setSelectedTransaction] = React.useState(null);

  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [visibleComponent, setVisibleComponent] = React.useState(list[0].text);

  const handleClick = (component) => {
    setVisibleComponent(component);
  };

  const renderComponent = () => {
    switch (visibleComponent) {
      case list[0].text:
        return <Dashboard openModal={openModal} />;
      case list[1].text:
        return <Transaction openModal={openModal} />;
      default:
        return <Dashboard openModal={openModal} />;
    }
  };

  return (
    <div className="container">
      <SideBar
        list={list}
        handleClick={handleClick}
        clicked={visibleComponent}
      />
      <div className="flexBar">
        {modalIsOpen && (
          <Modal
            closeModal={closeModal}
            selectedTransaction={selectedTransaction}
          />
        )}
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
