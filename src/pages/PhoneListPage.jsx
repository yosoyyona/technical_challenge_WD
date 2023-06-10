import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Detail from "../components/Detail";
import axios from 'axios'

const PhoneListPage = () => {

  const [fetching, setFetching] = useState(true);
  const [phones, setPhones] = useState([])
  const [detailsVisible, setDetailsVisible] = useState({})

  // use axios
  useEffect(() => {
    axios.get('src/data/phones.json')
    .then(response => {
      setPhones(response.data)
      setFetching(false)
    })
    .catch(err => console.log(err))
  }, [])

  const toggleShow = (id) => {
    setDetailsVisible(prevVisible => ({
      ...prevVisible,
      [id]: !prevVisible[id]
    }))
  }

  return (
    <div>

      <h1>List of Phones</h1>    
      {fetching && <p>Loading ...</p>}

      { phones.map(phone => {
        const showDetails = detailsVisible[phone.id] || false;

        return (
          <div key={phone.id}>

            <div style={{display:'flex', justifyContent:'space-between'}} >

              <h2>{phone.name}</h2>

              <button style={{margin: '10px'}} onClick={() => toggleShow(phone.id)}>
                { showDetails ? 'Hide' : 'Show detail' }
              </button>
            </div>
            
            {showDetails && <Detail phone={phone} />}
            
          </div>
      )})}
    
    </div>
  )
}

export default PhoneListPage