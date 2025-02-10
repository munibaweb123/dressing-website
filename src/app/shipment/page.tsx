import ShippingForm from '@/components/shippingForm'
import React from 'react'

const shipment = async () => {
    const res = await fetch('http://localhost:3000/api/shipengine')
    const data = await res.json()
    console.log(data)
  return (
    <div className='text-center'>shipment
    <ShippingForm/></div>
  )
}

export default shipment