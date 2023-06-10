import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = ({phone}) => {

  const { phoneId } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    if(phone) setDetail(phone)
    else {
      axios.get('src/data/phones.json')
      .then(response => {
        console.log(response.data[phoneId])
        setDetail(response.data[phoneId])
      })
      .catch(err => console.log(err))
    }
  }, [phone, phoneId])


  return (
    <div>
      <div>
        <h3>Manufacturer: {phone.manufacturer}</h3>
        <h4>Color: {phone.color}</h4>
        <h4>Price: {phone.price}</h4>
        <h5 style={{margin: '0px 10rem'}}>{phone.description}</h5>
        <img src={`/images/${phone.imageFileName}`} 
          style={{maxHeight:'20rem', height:'auto'}}
        />
      </div>

    </div>
  )
}

export default Detail