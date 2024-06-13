import logo from "./logo.svg";
import "./App.css";
import { ModalContext, useModalContext } from "@issy_alva/modal-context";
import SampleModal, { sampleModalName } from "./SampleModal";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

function App() {
  const { setOpen } = useModalContext(sampleModalName);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="App" style={{ position: "relative" }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setOpen(true)}>Open sample modal</button>
      </header>
    </div>
  );
}

const Wrapper = () => {
  return (
    <ModalContext
      modals={[
        {
          name: sampleModalName,
          component: <SampleModal />,
        },
      ]}
    >
      <App />
    </ModalContext>
  );
};

export default Wrapper;
