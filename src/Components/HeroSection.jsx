import React from 'react'
import Navbar from './Navbar'
const HeroSection = () => {
  return (
    <section className='herosection' id="herosection">
      <Navbar/>
      <div className='container'>
        <div className='banner'>
          <div  className='largeBox'>
            <h1 className='title'>Delicious</h1>
          </div>
          <div className='combined_boxes'>
            <div className='imageBox'>
                <img src="./hero1.png" alt="hero" />
            </div>
              <div className='textAndLogo'>
                <div className='textWithSvg'> 
                  <h1 className='title'>Food</h1>
                  <h1 className='title dishes_title'>Dishes</h1>
                  <img src="./threelines.svg" alt="" />
                </div>
                <img className="logo" src="logo.svg" alt="" />
              </div>
          </div>
        </div>
        <div className='banner'>
          <div className='imageBox'>
            <img src="hero2.png" alt="" />
          </div>
          <h1 className='title dishes_title'>Dishes</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection