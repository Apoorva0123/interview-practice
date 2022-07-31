import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addItem } from '../Redux/action';

const Add = () => {
  const companies = useSelector((store) => store.companies.companyData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  console.log(companies);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: companies[companies.length-1].id + 1,
      name: name,
      role: role
    }
    console.log(data);
    dispatch(addItem(data))
    alert("Company added successfully")
    navigate("/");
  }
  return (
    <div>
        <h1>Add Company</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter company name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type='text' placeholder='Enter Role' value={role} onChange={(e)=> setRole(e.target.value)}/>
            <input type='submit' value='Add Company'/>
        </form>
    </div>
  )
}

export default Add