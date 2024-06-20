import "./App.css";
import { ModalContext, useModalContext } from "@issy_alva/modal-context";
import SimpleModal, { simpleModalName } from "./SimpleModal";
import React, { useState } from "react";
import DataModal, { dataModalName } from "./DataModal";

function App() {
  const { setOpen: setSimpleModalOpen } = useModalContext(simpleModalName);
  const { setOpen: setDataModalOpen } = useModalContext(dataModalName);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App bg-black flex h-screen w-full relative flex-col items-center justify-center">
      <button
        className="bg-white text-black p-2 rounded-lg"
        onClick={() => setSimpleModalOpen(true)}
      >
        Open simple modal
      </button>
      <div className="p-8">
        <input
          type="text"
          value={inputText}
          placeholder="Enter data"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-white text-black p-2 rounded-lg"
          onClick={() => setDataModalOpen(true, inputText)}
        >
          Open data modal
        </button>
      </div>
    </div>
  );
}

const Wrapper = () => {
  return (
    <ModalContext
      modals={[
        {
          name: simpleModalName,
          component: <SimpleModal />,
        },
        {
          name: dataModalName,
          component: <DataModal />,
        },
      ]}
    >
      <App />
    </ModalContext>
  );
};

export default Wrapper;
