import React, { useState } from 'react'
import axios from 'axios'
import pizza from '../styles/pizza.jpg'

const Main = (props) => {
  
  const [userInput, updateUserInput] = useState('')
  const [invalidPostcode, updateInvalidPostcode] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (userInput.length < 6) {
      return updateInvalidPostcode('Please Enter A Valid Postcode.')
    }
    async function fetchData() {
      const resp = await axios.get(`https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes/${userInput}`)
        .then(() => {
          props.history.push(`restlist/${userInput}`)
        })
        .catch(function () {
          updateInvalidPostcode('Please Enter A Valid Postcode.')
        })
    }
    fetchData()
  }

  function updateInput(e) {
    e.preventDefault()
    updateUserInput(e.target.value)
    updateInvalidPostcode('')
  }



  return <section>
    <div
      className="top-section"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url( ${pizza} )` }}
    >
      <div className="hero-text">
        <h1 className="mainHeadline"> You want a pizza me?</h1>
      </div>
      <div className="hero-input">
        <small>{invalidPostcode}</small>
        <input className="mainInput" placeholder="Enter postcode" onChange={updateInput} />
        <button style={{ textDecoration: 'none', color: '#D1E8E2' }} value={userInput} id="homeSearch" onClick={handleSubmit} >
          Search By Postcode
        </button>
      </div>
    </div>

  </section>

}


export default Main