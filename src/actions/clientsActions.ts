import types from '../actionTypes';
import axios from 'axios';

const getListClients = () => {
  return {
    type: types.GET_LIST_CLIENTS
  }
}
const getListClientsSuccess = (response: any) => {
  return {
    type: types.GET_LIST_CLIENTS_SUCCESS,
    response
  }
}
const getListClientsError = (error: any) => {
  return {
    type: types.GET_LIST_CLIENTS_ERROR,
    error
  }
}

export const getListClientsRequest = () => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "abYz10"
    }
  });

  const request = instance.get(`http://localhost:8383/clientes/lista`);

  return (dispatch) => {
    dispatch(getListClients());

    request.then( (response: any) => {
      dispatch(getListClientsSuccess(response.data));
    }).catch( (error: any) => {
      dispatch(getListClientsError(error));
    });
  }
}