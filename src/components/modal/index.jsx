import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;