import React from 'react'
import authorsImage from '../styles/authorsImage.png'

const Authors = () => {



  return <section className="card">
    <h1 id="authoursTitle"> We made this!</h1>
    <img id="authorsImage" src={authorsImage} alt="laurence-sherryll"></img>
    <h3>A bit about the authors...</h3>
    <div id="laurence-sherryll">
      <div className="laurence">
        <h4>Laurence Walshe
        </h4>
        <p id="laurence-para"> very tall. very smart. Has cats. Likes coffee and loud T-shirts </p>
      </div>
      <div className="sherryll">
        <h4>Sherryll Elliott</h4>
        
        <p id="sherryll-para"> Less tall. very smart. Has cats. Likes glasses</p>
      </div>
    </div>
  </section >

}


export default Authors