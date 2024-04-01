// reducers.js
import { ADD_BULLETIN, EDIT_BULLETIN, DELETE_BULLETIN } from './actions';

const initialState = {
  bulletins: [],
};

const bulletinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BULLETIN:
      return {
        ...state,
        bulletins: [...state.bulletins, action.payload],
      };
    case EDIT_BULLETIN:
      return {
        ...state,
        bulletins: state.bulletins.map(bulletin =>
          bulletin.id === action.payload.id ? action.payload : bulletin
        ),
      };
    case DELETE_BULLETIN:
      return {
        ...state,
        bulletins: state.bulletins.filter(bulletin =>
          bulletin.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default bulletinReducer;
