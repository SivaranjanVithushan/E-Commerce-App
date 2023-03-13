import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white md-0'>Free shipping Over $100 & Free Returns  </p>
            </div>
            <div className="col-6"> 
            <p className='text-end text-white md-0'>Hotline: <a className='text-white' href='tel:+94 772644218'>+94 772644218 </a></p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default header