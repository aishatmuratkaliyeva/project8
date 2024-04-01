
// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // ваш корневой редьюсер

const store = createStore(rootReducer); // создаем хранилище с корневым редьюсером

export default store;
