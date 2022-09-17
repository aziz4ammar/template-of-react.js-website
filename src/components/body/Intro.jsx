import React from 'react'
import unnamed from "../img/unnamed.jpg";
import "./intro.css"
const Intro = () => {
  return (
    <div id='yr'>
      <div id='ya'>
      <h1 className='a'>❤CANADA LOVER❤</h1>
      <img className='b' src={unnamed} alt="" />
      </div>
      <br />
      <br />
      <br />
      <div id='yz'>
      <h1 className='a'>❤NATIONAL ANTHEM❤</h1>
      </div>
      <div>
        <br />
      <iframe className='f' width="560" height="315" src="https://www.youtube.com/embed/kRPGPAnPNa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br />
      <br />
      </div>
      <div id='ye'>
      <h1 className='a'>❤MY FAVOURITES CITIES❤</h1>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Intro