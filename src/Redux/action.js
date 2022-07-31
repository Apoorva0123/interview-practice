import { actionType } from "./actionType";
import axios from "axios";

const fetchCompanyDataSuccess = (CompanyData) => {
  // set data to CompanysData
  return {
    type: actionType.FETCH_COMPANY_DATA_SUCCESS,
    payload: CompanyData, // data from the server
  };
};

const fetchCompanyDataFailure = (error) => {
  // set error to true
  return {
    type: actionType.FETCH_COMPANY_DATA_FAILURE,
    payload: error,
  };
};

const fetchCompanyDataLoading = () => {
  // set loading to true
  return {
    type: actionType.FETCH_COMPANY_DATA_LOADING,
  };
};

const fetchCompanies = () => async (dispatch) => {
  dispatch(fetchCompanyDataLoading()); // set loading to true

  try {
    const res = await fetch("http://localhost:8080/companies"); // fetching data from the server
    const data = await res.json();
    if (data.message) {
      dispatch(fetchCompanyDataFailure(data.message));
    } else {
      dispatch(fetchCompanyDataSuccess(data));
    }
  } catch (error) {
    dispatch(fetchCompanyDataFailure(error)); // set error to true
  }
};

const updateCompany = (data) => {
    return{
        type: actionType.UPDATE_COMPANY,
        payload: data
    }
}

const deleteCompany = (company) => {
    return{
        type: actionType.DELETE_COMPANY,
        payload: company
    }
}

const addCompany = (data) => {
    return{
        type: actionType.ADD_COMPANY,
        payload: data
    }
}

const addItem = (company) => {
    return (dispatch) => {
      axios.post("http://localhost:8080/companies", company).then((res) => {
        dispatch(addCompany(res.data));
      });
    };
  }

  const deleteItem = (company) => {
    return (dispatch) => {
      axios
        .delete(`http://localhost:8080/companies/${company.id}`)
        .then(() => {
          dispatch(deleteCompany(company));
        });
    };
  };

  const editItem = (company) => {
    return(dispatch) => {
        axios
            .put(`http://localhost:8080/companies/${company.id}`,
            {
                name: company.name,
                role: company.role
            })
            .then(() => {
                dispatch(updateCompany(company))
            })
    }
  }

export {
  fetchCompanyDataSuccess,
  fetchCompanyDataFailure,
  fetchCompanyDataLoading,
  fetchCompanies,
  updateCompany,
  deleteCompany,
  addItem,
  addCompany,
  deleteItem,
  editItem
};