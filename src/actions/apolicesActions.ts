import types from '../actionTypes';
import axios from 'axios';

const getApolicesList = () => {
    return {
        type: types.GET_LIST_APOLICES
    }
}

const getApolicesListSuccess = (response: any) => {
    return {
        type: types.GET_LIST_APOLICES_SUCCESS,
        response
    }
}

const getApolicesListError = (error: any) => {
    return {
        type: types.GET_LIST_APOLICES_ERROR,
        error
    }
}

export const getApolicesListRequest = () => {
    const instance = axios.create({
        headers: {
            "Content-Type": "application/json"
        }
    });

    const request = instance.get(`http://localhost:8383/apolices/lista`);

    return (dispatch: any) => {
        dispatch(getApolicesList());

        return request.then( (response: any) => {
            dispatch(getApolicesListSuccess(response.data));
        }).catch( (error: any) => {
            dispatch(getApolicesListError(error));
        });
    }
}