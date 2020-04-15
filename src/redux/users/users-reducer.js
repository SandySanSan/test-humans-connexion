import { usersActionTypes } from './users-types';

const INTIAL_STATE = {};

const usersReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.GET_USERS:
            return { users: getUsersInfo(action.payload) };

        case usersActionTypes.DELETE_USER:
            const newState = [...state.users];
            const filterUsers = newState.filter(
                (user) => user.id !== action.payload
            );
            return { users: filterUsers };

        case usersActionTypes.ADD_USER:
            const newUser = action.payload;
            newUser.id = state.users.length + 1;
            const newUsersState = [...state.users];
            newUsersState.push(newUser);
            return { users: newUsersState };

        default:
            return state;
    }
};

const getUsersInfo = (data) => {
    return data.map((user) => ({
        id: user.id,
        firstName: user.name.split(' ')[0].toUpperCase(),
        lastName: user.name.split(' ')[1].toUpperCase(),
        email: user.email,
        city: user.address.city,
        company: user.company.name,
    }));
};

export default usersReducer;
