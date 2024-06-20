import { useModalContext } from "@issy_alva/modal-context";
import React from "react";

const SimpleModal = () => {
  const { setOpen, open } = useModalContext(simpleModalName);
  const handleClose = () => {
    console.log("is triggered?");
    setOpen(false);
  };
  if (!open) return null;
  return (
    <div className="flex absolute inset-20 bg-white z-10 h-[600px] items-center justify-center gap-5">
      HelloWorld
      <button
        className="bg-black text-white p-2 border rounded-lg"
        onClick={handleClose}
      >
        close the modal
      </button>
    </div>
  );
};

export default SimpleModal;
export const simpleModalName = "simple-modal";
