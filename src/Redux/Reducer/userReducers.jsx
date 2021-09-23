import * as types from "../types";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
