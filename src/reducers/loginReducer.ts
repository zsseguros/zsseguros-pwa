import types from '../actionTypes';

const LOGIN_STATE = {
  user: null
};

export const login = (state = LOGIN_STATE, action) => {
  switch (action.type) {
    case types.SAVE_UID:
      return {
        ...state,
        user: action.user
      }
  
    default:
      return {
        ...state
      }
  }
}