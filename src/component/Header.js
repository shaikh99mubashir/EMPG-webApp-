import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} alt="logo" height={35} width={120} className='mx-3 mt-3' />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto navbar-text" style={{gap:10, fontSize:13, fontWeight:700}}>
      <Link to="/">
      <li class="nav-item active">
      Home
      </li>
      </Link>
      <Link to="about">
      <li class="nav-item">
      About
      </li>
      </Link>
      <Link to="investor">
      <li class="nav-item">
      Investors Relations
      </li>
      </Link>
      <Link to='careers'>
      <li class="nav-item">
      Careers
      </li>
      </Link>
      <Link to="inTouch">
      <li class="nav-item">
      Get In Touch
      </li>
      </Link>
    </ul>
    
  </div>
</nav>
  )
}

export default Header