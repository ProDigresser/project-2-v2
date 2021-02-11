import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Restlist = (props) => {

  const postcode = props.match.params.postcode
  const [restList, updateRestList] = useState({})


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
      updateRestList(data)
    }
    fetchData()
  }, [])

  if (!restList.Restaurants) {
    return <div className="loaderContainer">
      <h1 className="loader"></h1>
      <h3>loading!</h3>
    </div>
  }

  return <section id="desktopRestList">
    <div id="wholePageContent">
      <aside 
        className="desktopView"
      >
      </aside>
      <div id="wholePageList">
        <h1 className="pageTitle">Restaurants in {restList.Area}</h1>
        {restList.Restaurants.map((rest, i) => {
          return <Link style={{ color: '#2C3531', textDecoration: 'none' }}
            key={i}
            to={{
              pathname: `/project-2/restlist/rest/${rest.Id}`,
              state: { rest }
            }}
          >
            <div className="card">
              <h1 className="cardTitle">{rest.Name}</h1>
              <div className="container">
                <img className="logo" src={rest.LogoUrl} alt="logo" />
                <ul>
                  {rest.Cuisines.map((cuisine, i) => {
                    return <li key={i}>
                      {cuisine.Name}
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </Link>
        })}
        
      </div>
      <aside 
        className="desktopView"
      >
      </aside>
    </div>
  </section>


}


export default Restlist