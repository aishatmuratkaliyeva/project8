import React, { useState, Suspense } from 'react';
import './App.css';

const EditBulletinForm = React.lazy(() => import('./EditBulletinForm'));
const DeleteButton = React.lazy(() => import('./DeleteButton'));

function App() {
  const [bulletins, setBulletins] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBulletin = { id: Date.now(), title, description };
    setBulletins([...bulletins, newBulletin]);
    setTitle('');
    setDescription('');
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, updatedBulletin) => {
    const updatedBulletins = bulletins.map(bulletin =>
      bulletin.id === id ? updatedBulletin : bulletin
    );
    setBulletins(updatedBulletins);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedBulletins = bulletins.filter(bulletin => bulletin.id !== id);
    setBulletins(updatedBulletins);
  };

  return (
    <div className="app">
      <h1>Task 8</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <button type="submit">Add Bulletin</button>
      </form>
      <div>
        {bulletins.map(bulletin => (
          <div key={bulletin.id} className="bulletin-card">
            {editingId === bulletin.id ? (
              <Suspense fallback={<div>Loading...</div>}>
                <EditBulletinForm bulletin={bulletin} onSave={(updatedBulletin) => handleSave(bulletin.id, updatedBulletin)} onCancel={() => setEditingId(null)} />
                <DeleteButton bulletin={bulletin} onDelete={() => handleDelete(bulletin.id)} />
              </Suspense>
            ) : (
              <>
                <h2>{bulletin.title}</h2>
                <p>{bulletin.description}</p>
                <div>
                  <button onClick={() => handleEdit(bulletin.id)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(bulletin.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;






















