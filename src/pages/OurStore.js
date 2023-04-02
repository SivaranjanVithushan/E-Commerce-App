import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
const OurStore = () => {
    return (
        <>
            <meta title={"Our Store"} />
            <BreadCrumb title={document.title} />
            <div className='stor-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='fitter-card mb-3 '>
                                <h3 className='fitter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='fitter-card mb-3'>
                                <h3 className='fitter-title'>Fitter By</h3>
                                <div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div className='form-check'>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                              />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            In Stock(1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                             />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Out of Stock(0)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        value="" 
                                        id="flexCheckDefault"
                                         />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Out of Stock
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        value="" 
                                        id="flexCheckDefault"
                                         />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Out of Stock
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='fitter-card mb-3'>
                                <h3 className='fitter-title'>Product Tag</h3>
                            </div>
                            <div className='fitter-card mb-3'>
                                <h3 className='fitter-title'>Random Product</h3>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore