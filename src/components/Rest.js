import React, { useState } from 'react'
import RestDetails from './RestDetails'
import RestOrders from './RestOrders'

const Rest = (props) => {
  const [rest, updateRest] = useState({})

  if (!rest.Id) {
    updateRest(props.location.state.rest)
    return <h3>Loading...</h3>
  }
  return <section>
    <div className="restCard">
      <div className="detailsOrders" >
        <RestDetails rest={rest} />
      </div>
      <div id="orderDetails" className="restCard" >
        <RestOrders rest={rest} />
      </div>
    </div>
  </section>
}



export default Rest