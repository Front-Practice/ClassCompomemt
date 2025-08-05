import React from 'react';

const CardItem = ({ card, onEdit, onDelete }) => {
  const { id, title, description, date, priority, status } = card;

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <div className="flex gap-2 mt-auto">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardItem;