import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="header__nav">
        <div>
          <h1>KR</h1>
        </div>
        <div className="navbar">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">PROJECTS</a>
          <a href="">CONTACT</a>
        </div>
        <div className="icon">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="dash"><i class="fa-solid fa-list" style={{color: `030303` }}></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar