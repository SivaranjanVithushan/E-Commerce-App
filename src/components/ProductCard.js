import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
const ProductCard = () => {
    return (
        <div className='col-3'>
            <Link className='product-card mb-3 position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link to='#'>
                        <img src='images/wish.svg' alt='wishlist' className='img-fluid' />
                    </Link>
                </div>
                <div className='product-image '>
                    <img src='images/watch.jpg' alt='product images' className='img-fluid ' />
                    <img src='images/watch-2.webp' alt='product images' className='img-fluid ' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Haves</h6>
                    <h5 className=''>Kids Headphone Bulk 10 pack Multi Colored For...</h5>
                    <div>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <p className='price'>$ 10.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                    <Link>
                        <img src='images/prodcompare.svg' alt='Compare' className='img-fluid' />
                    </Link>
                    <Link>
                        <img src='images/view.svg' alt='View' className='img-fluid' />
                    </Link>
                    <Link>
                        <img src='images/add-cart.svg' alt='Add-card' className='img-fluid' />
                    </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard