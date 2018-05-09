import types from '../actionTypes';
import { selectClient } from '../actions/clientsActions';

const CLIENTS_STATE = {
  isGettingList: false,
  getListSuccess: null,
  getListError: null,
  selectedClient: null,
  isGettingListTasks: false,
  getListTasksSuccess: null,
  getListTasksError: null
};

export const client = (state = CLIENTS_STATE, action) => {
  switch (action.type) {
    case types.GET_LIST_CLIENTS:
      return {
        ...state,
        isGettingList: true,
        getListSuccess: null,
        getListError: null
      }
    case types.GET_LIST_CLIENTS_SUCCESS:
      return {
        ...state,
        isGettingList: false,
        getListSuccess: action.response,
        getListError: null
      }
    case types.GET_LIST_CLIENTS_ERROR:
      return {
        ...state,
        isGettingList: false,
        getListSuccess: null,
        getListError: action.error
      }
    case types.SELECT_CLIENT:
      return {
        ...state,
        selectedClient: action.selectedClient
      }
    case types.GET_LIST_TASKS:
      return {
        ...state,
        isGettingListTasks: true,
        getListTasksSuccess: null,
        getListTasksError: null        
      }
    case types.GET_LIST_TASKS_SUCCESS:
      return {
        ...state,
        isGettingListTasks: false,
        getListTasksSuccess: action.response,
        getListTasksError: null
      }
    case types.GET_LIST_TASKS_ERROR:
      return {
        ...state,
        isGettingListTasks: false,
        getListTasksSuccess: null,
        getListTasksError: action.error
      }
    default:
      return {
        ...state
      }
  }
}