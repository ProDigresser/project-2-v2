import React, { useState } from 'react'


const RestOrders = ({ rest }) => {

  const [isOpen, updateIsOpen] = useState('')
  const [collection, updateCollection] = useState('')
  const [delivery, updateDelivery] = useState('')
  const [offers, updateOffers] = useState('')

  if (isOpen === '') {
    if (rest.IsOpenNow === false) {
      updateIsOpen('❌')
      updateDelivery('❌')
      updateCollection('❌')
    } else {
      updateIsOpen('✅')
      if (rest.isOpenNowForCollection === true) {
        updateCollection('✅')
      } else {
        updateCollection('❌')
      }
      if (rest.IsOpenNowForDelivery === true) {
        updateDelivery('✅')
      } else {
        updateDelivery('❌')
      }
    }
  }

  if (offers === '') {
    if (rest.Offers[0] === undefined) {
      updateOffers(' N/A')
    } else {
      updateOffers(rest.Offers[0].Description)
    }
  }

  return <section className="restDetails">
    <h3 id="orderTitle">Order Details:</h3>
    <div id="details">
      <ul>
        <li>Open: {isOpen}</li>
        <li>Collection: {collection}</li>
        <li>Delivery: {delivery}</li>
        <li>Offers: 💳 {offers}</li>
        <li>Distance: 📍 {rest.DriveDistance} Miles</li>
      </ul>
    </div>
    <div className="deliver-time">
      <DeliveryReadout rest={rest} />
    </div>
  </section>
}

const DeliveryReadout = ({ rest }) => {
  const deliveryTime = [rest.DeliveryEtaMinutes.RangeLower, rest.DeliveryEtaMinutes.RangeUpper]

  if (rest.IsOpenNow === false) {
    return <ul>
      <li>Delivery Time: <span>N/A</span></li>
    </ul>

  } else {
    return <ul>
      <li>Delivery Time: <span>{deliveryTime[0]}</span> & <span>{deliveryTime[1]}</span></li>
    </ul>
  }
}

export default RestOrders