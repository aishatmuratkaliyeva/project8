// DeleteButton.js
import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>Delete</button>
  );
};

export default React.memo(DeleteButton);


