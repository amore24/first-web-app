import { combineReducers } from 'redux';
import personnelDataReducer from './personnelDataReducer.jsx';


export default combineReducers({
    personnel: personnelDataReducer,
});