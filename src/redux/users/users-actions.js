import axios from 'axios';
import { usersActionTypes } from './users-types';

export function fetchUsers() {
    return function (dispatch) {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((resp) =>
            dispatch({
                type: usersActionTypes.GET_USERS,
                payload: resp.data,
            })
        );
    };
}
