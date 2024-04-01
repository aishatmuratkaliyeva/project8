import React from 'react';
import { connect } from 'react-redux';
import { deleteBulletin } from './actions'; // Импортируем нужное действие для удаления объявления

const BulletinList = ({ bulletins, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Bulletin Board</h2>
      <ul className="bulletin-list">
        {bulletins.map(bulletin => (
          <li key={bulletin.id} className="bulletin-item">
            <div>
              {bulletin.title} - {bulletin.description} - {new Date(bulletin.createdAt).toLocaleString()}
            </div>
            <button onClick={() => handleDelete(bulletin.id)}>Delete</button>
            {/* Добавляем кнопку редактирования */}
            <button onClick={() => handleEdit(bulletin)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  bulletins: state.bulletins
});

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(deleteBulletin(id))
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(BulletinList));





