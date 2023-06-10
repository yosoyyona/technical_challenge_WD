import React from 'react'
import { useParams } from 'react-router-dom'

const PhoneDetailPage = () => {

  const {phoneId} = useParams()
  
  return (
    <div>PhoneDetailPage</div>
  )
}

export default PhoneDetailPage