import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
      <div className="footer__container">
        <div className="contact__info">
          <h2>GET IN TOUCH</h2>
          <h3><i className="fa-solid fa-envelope" style={{color: `#000000`}}></i> email@mail.com</h3>
          <h3><i className="fa-solid fa-phone" style={{color: `#000000`}}></i>07 55 555 555</h3>
        </div>
        <div className="button__contact">
          <button>Contact Me</button>
        </div>
        <div className="social__icons">
          <i className="fab fa-linkedin-in" style={{color: `#000000`}}></i>
          <i className="fa-brands fa-facebook" style={{color: `#000000`}}></i>
          <i className="fa-brands fa-square-twitter" style={{color: `#000000`}}></i>
          <div>
            <h3>Copyright Â© 2025</h3>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer