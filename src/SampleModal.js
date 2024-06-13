import { useModalContext } from "@issy_alva/modal-context";
import React from "react";

const SampleModal = () => {
  const { setOpen } = useModalContext(sampleModalName);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "red",
      }}
    >
      HelloWorld
      <button onClick={() => setOpen(false)}>close the modal</button>
    </div>
  );
};

export default SampleModal;
export const sampleModalName = "sample-modal";
