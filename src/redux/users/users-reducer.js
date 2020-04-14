import { usersActionTypes } from './users-types';

const INTIAL_STATE = {};

const usersReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.GET_USERS:
            return { ...state, users: getUsersInfo(action.payload) };
        default:
            return state;
    }
};

const getUsersInfo = (data) => {
    return data.map((user) => ({
        id: user.id,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1],
        email: user.email,
        city: user.address.city,
        company: user.company.name,
    }));
};

export default usersReducer;
