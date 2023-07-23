import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../images/backgrounImage.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' 
    style={{backgroundImage : `url(${BackgroundImage}`}}>
      <div className='headerContainer'>
       <h1>Fresco</h1>
       <p>We’ll take care of the goods.</p>
       <Link to = '/menu'>
       <button>Order Now</button>
       </Link>
      </div>
    </div>
  )
}

export default Home