import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { editItem } from '../Redux/action';

const Edit = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        id: parseInt(id),
        name,
        role
      }
      dispatch(editItem(data))
      alert("Company edited successfully");
      navigate('/');
    }
  return (
    <div>
        <h1>Edit Company {id}</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter company name'/>
            <input type='text' value={role} onChange={(e)=> setRole(e.target.value)} placeholder='Enter Role'/>
            <input type='submit' value='Edit Company'/>
            <button><Link to='/'>Cancel</Link></button>
        </form>
    </div>
  )
}

export default Edit