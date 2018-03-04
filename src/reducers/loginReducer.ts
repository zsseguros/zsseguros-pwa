import types from '../actionTypes';

const LOGIN_STATE = {
  uid: null
};

export const login = (state = LOGIN_STATE, action) => {
  switch (action.type) {
    case types.SAVE_UID:
      return {
        ...state,
        uidToken: action.uidToken
      }
  
    default:
      return {
        ...state
      }
  }
}