import { useModalContext } from "@issy_alva/modal-context";
import React from "react";

const DataModal = () => {
  const { setOpen, open, data } = useModalContext(dataModalName);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="flex absolute inset-20 bg-white z-10 h-[600px] items-center justify-center gap-5">
      Your data here: {data}
      <button
        className="bg-black text-white p-2 border rounded-lg"
        onClick={handleClose}
      >
        close the modal
      </button>
    </div>
  );
};

export default DataModal;
export const dataModalName = "data-modal";
