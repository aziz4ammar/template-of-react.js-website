import React from 'react'
import unnamed from "../img/unnamed.jpg";
import "./intro.css"
const Intro = () => {
  return (
    <div>
      <h1 className='a'>❤CANADA LOVER❤</h1>
      <img className='b' src={unnamed} alt="" />
      <br />
      <br />
      <br />
      <h1 className='a'>❤NATIONAL ANTHEM❤</h1>
      <div>
        <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kRPGPAnPNa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br />
      <br />
      </div>
      <h1 className='a'>❤MY FAVOURITES CITIES❤</h1>
    </div>
  )
}

export default Intro