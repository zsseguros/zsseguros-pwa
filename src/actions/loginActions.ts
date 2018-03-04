import types from '../actionTypes';

export const saveUid = (uidToken: string) => {
  return {
    type: types.SAVE_UID,
    uidToken
  }
};