import axios from 'axios';
import { usersActionTypes } from './users-types';

export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: usersActionTypes.GET_USERS, payload: res.data });
};

export const deleteUser = (userId) => (dispatch) => {
    dispatch({ type: usersActionTypes.DELETE_USER, payload: userId });
};

export const addUser = (userData) => (dispatch) => {
    dispatch({ type: usersActionTypes.ADD_USER, payload: userData });
};
