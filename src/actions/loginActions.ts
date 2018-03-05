import types from '../actionTypes';

export const saveUser = (user: any) => {
  return {
    type: types.SAVE_UID,
    user
  }
};