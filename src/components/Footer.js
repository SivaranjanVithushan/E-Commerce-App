import React from 'react'
import {Link} from 'react-router-dom'

import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsYoutube} from 'react-icons/bs'
const footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='d-flex align-items-center footer-top-data gap-30'>
                <img src='images/newsletter.png' alt='newsletter' className='img-fluid' />
                <h2 className='md-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
                <div className='input-group'>
                  <input 
                    type='text' 
                    className='form-control py-1' 
                    placeholder='Enter your email address' 
                    aria-label='Enter your email address' 
                    aria-describedby='button-addon2' 
                  />
                  <span className='input-group-text p-2' id='basic-addon2'>Subscribe</span>
                </div>
              </div>
          </div>
        </div>
      </footer>
      <footer className='py-4' >
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white md-4'>Contact Us</h4> 
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 md-1'>Demo Store</Link>
                <address className='text-white fs-6  md-1 py-2'>Mallakam east, Mallakam,<br />Jaffna.<br/>PinCode:40000  </address>
                <a href='tel:+94 772644218' alt="Phone Number" className='text-white  md-1 py-2 d-block'>+94 772644218 </a>
                <a href='mailto:sivaranjanvithushan@gmail.com' alt="Email Address" className='text-white  md-1 py-2 d-block'>
                  Sivaranjanvithushan@gmail.com 
                  </a>
                <div className='social_icons d-flex align-items-center gap-30 '>
                  <a href='https://www.facebook.com/sivaranjan.vithushan.7' alt="Facebook" className='text-white'>
                     <BsFacebook />
                  </a>
                  <a href='https://www.instagram.com/sivaranjan_vithushan/' alt="Instagram" className='text-white'>
                     <BsInstagram />
                  </a>
                  <a href='https://twitter.com/SivaranjanVithu' alt="Twitter" className='text-white'>
                     <BsTwitter />
                  </a>
                  <a href='https://www.linkedin.com/in/sivaranjan-vithushan-0b1b1b1b9/' alt="Linkedin" className='text-white'>
                     <BsLinkedin />
                  </a>
                  <a href='https://www.youtube.com/channel/UCZ1Z2YQZ1Z2YQZ1Z2YQZ1Z2' alt="Youtube" className='text-white'>
                     <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white md-4'>Information</h4> 
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 md-1'>Privacy Policy</Link>
                <Link className='text-white py-2 md-1' >Refund Policy</Link>
                <Link className='text-white py-2 md-1' >Shipping Policy</Link>
                <Link className='text-white py-2 md-1' >Terms of Service</Link>
                <Link className='text-white py-2 md-1' >Blogs</Link>

              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white md-4'>Account</h4> 
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 md-1'>Search</Link>
                <Link className='text-white py-2 md-1'>About Us</Link>
                <Link className='text-white py-2 md-1' >Faq</Link>
                <Link className='text-white py-2 md-1' >Contact</Link>
                <Link className='text-white py-2 md-1' >Size Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white md-4'>Quick Links</h4> 
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 md-1'>Accessories</Link>
                <Link className='text-white py-2 md-1'>Laptops</Link>
                <Link className='text-white py-2 md-1' >Headphones</Link>
                <Link className='text-white py-2 md-1' >Tablets</Link>
                <Link className='text-white py-2 md-1' >Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4' >
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='m-0 text-center  text-white'> &copy; {new Date().getFullYear()}; powered by SVT Developer's Corner </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer