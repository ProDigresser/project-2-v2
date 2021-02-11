import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'

const RestDetails = ({ rest }) => {
  const [starRating, updateStarRating] = useState(0)
  const [mapLocation, updateMapLocation] = useState('')
  const restAddress = [rest.Address.FirstLine, rest.Address.City, rest.Address.Postcode]
  const mapString = restAddress.join(', ')
  const regex = / /gi
  const mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${mapLocation}&zoom=17&scale=1&size=400x400&maptype=roadmap&key=AIzaSyCu3ccf909RNQoQjHa3DUYSkIxbIsM5Hus&format=png&visual_refresh=true`
  const mapAlt = `Google Map of ${mapString}`
  const mapHref = `https://www.google.com/maps/place/${mapLocation}`


  if (starRating === 0) {
    updateMapLocation(restAddress.join('+').replace(regex, '+'))
    updateStarRating(rest.RatingStars)
  }

  return <section className="restInfo">
    <h1 className="cardTitle">{rest.Name}</h1>
    <div id="logo-rating">
      <img src={rest.LogoUrl} alt="logo" />
      <div id="fry-rating">
        <h3>Fry Rating:</h3>
        <StarRatingComponent
          name={rest.Name}
          editing={false}
          starCount={6}
          value={starRating}
        /> <br /><small>From {rest.NumberOfRatings} reviews.</small>
      </div>
    </div>

    <div id="cuisine-address">
      <div id="address">
        <h3>Address</h3>
        <h4>{mapString}</h4>
      </div>
      <div id="cuisine">
        <h3>Cuisines</h3>
        <p>
          {rest.Cuisines.map((cuisine, i) => {
            if (i === rest.Cuisines.length - 1) {
              return <span key={i}>{cuisine.Name}</span>
            }
            return <span key={i}>{cuisine.Name} & </span>
          })}
        </p>
      </div>
    </div>

    <section className="mapSection">
      <div id="mapCard" style={{ backgroundImage: 'url(' + mapSrc + ')' }}>
        <a id="mapLink" href={mapHref} target="_blank" rel="noreferrer" alt={mapAlt}>
          <div id="mapContainer">
            <p>🍔</p>
          </div>
        </a>
      </div>
    </section>

  </section>
}

export default RestDetails