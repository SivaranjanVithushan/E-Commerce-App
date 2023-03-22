import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card mb-3'> 
            <div className='card-image'>
                <img src='images/blog-1.jpg' alt='blog images' className='img-fluid' />
            </div>
            <div className='card-content'>
                <p className='date'>1 Feb, 2023</p>
                <h4 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
                <p className='dec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <Link to='/blog-details' className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard;