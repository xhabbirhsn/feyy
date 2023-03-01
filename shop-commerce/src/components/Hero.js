import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    
    <section id="hero">
        <h4>Future of Smartphone Photography</h4>
        <h2>Xioami 13 Pro</h2>
        <h5>Early Access Sale on 6th March at 12 Noon</h5>
        <p>Availbe at <span>₹69,999</span> </p>
        <Link to="/Register"><button>Buy Now</button></Link>
    </section>

  )
}

export default Hero