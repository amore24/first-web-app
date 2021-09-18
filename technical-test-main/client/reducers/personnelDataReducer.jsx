import { ADD_PERSONNEL_DATA, DELETE_PERSON_BY_REF, SORT_BY_NAME } from '../actions/types.jsx';
import React from 'react';
const initialState = {
    personnel:[],
    loading:true
}
export default function personnelDataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSONNEL_DATA:
             return {
            ...state,
            personnel:action.payload,
            loading:false
        }
        case DELETE_PERSON_BY_REF:
            return {
            ...state,
            personnel: state.personnel.filter((e) => { if (e.Reference !== action.payload.Reference) { return true;} return false;}),
        }
        case SORT_BY_NAME:
            return {
            ...state,
            personnel: state.personnel.sort((a, b) => (a.GivenName > b.GivenName) ? 1 : -1),
        }
        default:
            return state;
    }
}