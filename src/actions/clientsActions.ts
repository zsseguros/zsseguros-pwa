import types from '../actionTypes';
import axios from 'axios';
import { configs } from 'appSrc/actions/configs';

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

  const request = instance.get(`${configs.api}clientes/lista`);

  return (dispatch) => {
    dispatch(getListClients());

    request.then( (response: any) => {
      dispatch(getListClientsSuccess(response.data));
    }).catch( (error: any) => {
      dispatch(getListClientsError(error));
    });
  }
}

export const selectClient = (selectedClient: any) => {
  return {
    type: types.SELECT_CLIENT,
    selectedClient
  }
}

const getListTasks = () => {
  return {
    type: types.GET_LIST_TASKS
  }
}

const getListTasksSuccess = (response: any) => {
  return {
    type: types.GET_LIST_TASKS_SUCCESS,
    response
  }
}

const getListTasksError = (error: any) => {
  return {
    type: types.GET_LIST_TASKS_ERROR,
    error
  }
}

export const getListTasksRequest = (cod_cliente: string) => {
  const request = axios({
    method: 'GET',
    url: cod_cliente ?
        `${configs.api}clientes/tarefa-lista/${cod_cliente}`
      :
        `${configs.api}clientes/tarefa-lista`
  });

  return (dispatch: any) => {
    dispatch(getListTasks());

    return request.then( (response: any) => {
      dispatch(getListTasksSuccess(response.data));
    }).catch( (error: any) => {
      dispatch(getListTasksError(error));
    });
  }
}