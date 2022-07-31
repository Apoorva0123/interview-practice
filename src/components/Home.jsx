import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteItem } from '../Redux/action';

const Home = () => {
  const companies = useSelector((store) => store.companies.companyData)
  console.log(companies);
  const dispatch = useDispatch();
  const deleteCompanyFunc = (company) => {
    dispatch(deleteItem(company))
    alert("Company deleted successfully")
  }
  return (
    <div>
        <button><Link to='/add'>Add a company</Link></button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Company</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                companies?.map((company,id) => (
                  <tr key={id}>
                    <td>{id+1}</td>
                    <td>{company.name}</td>
                    <td>{company.role}</td>
                    <td><button><Link to={`/edit/${company.id}`}>Edit</Link></button></td>
                    <td><button onClick={()=> deleteCompanyFunc(company)}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home