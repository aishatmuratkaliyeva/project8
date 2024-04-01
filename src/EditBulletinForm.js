// EditBulletinForm.js
import React, { useState } from 'react';

const EditBulletinForm = ({ bulletin, onSave, onCancel }) => {
  const [title, setTitle] = useState(bulletin.title);
  const [description, setDescription] = useState(bulletin.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...bulletin,
      title,
      description
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default React.memo(EditBulletinForm);


