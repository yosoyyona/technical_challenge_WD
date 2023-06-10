import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PhoneListPage = () => {

  const [phones, setPhones] = useState([])

  // use axios
  useEffect(() => {
    axios.get('src/data/phones.json')
    .then(response => {
      console.log(response.data)
      setPhones(response.data)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div>

      <h1>Phone List</h1>    

      { phones.map(phone => {
        return (
          <h2 key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></h2>
      )})}
    
    </div>
  )
}

export default PhoneListPage