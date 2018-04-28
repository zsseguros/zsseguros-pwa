import types from '../actionTypes';

const APOLICES_STATE = {
    isGettingList: false,
    getListSuccess: null,
    getListError: null,
    selectedApolice: null
}

export const apolices = (state = APOLICES_STATE, action: any) => {
    switch (action.type) {
        case types.GET_LIST_APOLICES:
            return {
                ...state,
                isGettingList: true,
                getListSuccess: null,
                getListError: null                
            }
        case types.GET_LIST_APOLICES_SUCCESS:
            return {
                ...state,
                isGettingList: false,
                getListSuccess: action.response,
                getListError: null                
            }
        case types.GET_LIST_APOLICES_ERROR:
            return {
                ...state,
                isGettingList: false,
                getListSuccess: null,
                getListError: action.error
            }
        case types.SELECT_APOLICE:
            return {
                ...state,
                selectedApolice: action.apolice
            }
        default:
            return {
                ...state
            }
    }
}