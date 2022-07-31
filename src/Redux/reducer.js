import { actionType } from "./actionType";

// const init = [
//     {
//         id: 0,
//         name: 'Capgemini',
//         role: 'Full Stack Developer'
//     },
//     {
//         id: 1,
//         name: 'Google',
//         role: 'Front-end Developer'
//     }
// ];

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
                ...state, // keep the old state
                companyData: payload, // payload is the data from the server
                isError: false, // reset error
                isLoading: false, // reset loading
            }
        default:
            return state;
    }
} 