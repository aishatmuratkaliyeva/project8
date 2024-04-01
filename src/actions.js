// actions.js
export const ADD_BULLETIN = 'ADD_BULLETIN';
export const EDIT_BULLETIN = 'EDIT_BULLETIN';
export const DELETE_BULLETIN = 'DELETE_BULLETIN';

export const addBulletin = (bulletin) => ({
  type: ADD_BULLETIN,
  payload: bulletin,
});

export const editBulletin = (bulletin) => ({
  type: EDIT_BULLETIN,
  payload: bulletin,
});

export const deleteBulletin = (id) => ({
  type: DELETE_BULLETIN,
  payload: id,
});
