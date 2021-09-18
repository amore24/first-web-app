import { ADD_PERSONNEL_DATA, DELETE_PERSON_BY_REF, SORT_BY_NAME } from './types.jsx';
import axios from 'axios';
const apiUrl = 'http://localhost/api/personnel';

export const getData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_PERSONNEL_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const deletePersonData = (Reference) => {
    return {
      type: DELETE_PERSON_BY_REF,
      payload: {
        Reference
      }
    }
};
export const sortPersonData = (Reference) => {
    return {
      type: SORT_BY_NAME,
    }
};