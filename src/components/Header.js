import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

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
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h1>
                <Link className='text-white'>Amazon</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search the Product Here..." aria-label="Search the Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"> <BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between  ">
                <div >
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/compare.svg" alt="Compare" />
                    <p className='md-0'>Compare <br />Products </p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/wishlist.svg" alt="Wishlist" />
                    <p className='md-0'>Favourite <br />Wishlist </p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/User.svg" alt="User" />
                    <p className='md-0'>Log in <br />My Account </p>
                  </Link>
                </div>
                <div >
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/cart.svg" alt="User" />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='md-0'> $ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown ">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     <img src="images/Menu.svg" alt="Menu" />
                      <span className='me-5 d-inline-block'>Dropdown button</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/Home" >Home</NavLink>
                    <NavLink to="/Store" >Our Store</NavLink>
                    <NavLink to="/Blogs" >Blogs</NavLink>
                    <NavLink to="/Contact" >Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default header