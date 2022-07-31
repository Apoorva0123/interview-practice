import { actionType } from "./actionType";

const init = {
    companyData: [],
    isError: false,
    isLoading: false,
  };

export const companyReducer = (state = init, { type, payload }) => {
    switch(type)
    {   
        case actionType.ADD_COMPANY:
            return{
                ...state,
                companyData: [...state.companyData, payload]
            }
        case actionType.UPDATE_COMPANY:
            return{
                ...state,
                companyData: state.companyData.map((item)=> 
                {
                    if(item.id === payload.id)
                    {
                        return payload
                    }
                    return item
                })
            }
        case actionType.DELETE_COMPANY:
            return {
                ...state,
                companyData: state.companyData.filter((item) => item.id !== payload.id)
              };
        case actionType.FETCH_COMPANY_DATA_SUCCESS:
            return {
                ...state, 
                companyData: payload, 
                isError: false, 
                isLoading: false, 
            }
        case actionType.FETCH_COMPANY_DATA_FAILURE:
            return{
                ...state,
                isError: payload,
                isLoading: false
            }
        case actionType.FETCH_COMPANY_DATA_LOADING:
            return{
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
} 