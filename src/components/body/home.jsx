import React, { useEffect, useState } from 'react';
import hero from '../../img/hero.png';
import about1 from '../../img/about-1.jpg';
import about2 from '../../img/about-2.jpg';
import about3 from '../../img/about-3.jpg';
import about4 from '../../img/about-4.jpg';

import menu1 from '../../img/menu-1.jpg';
import menu2 from '../../img/menu-2.jpg';
import menu3 from '../../img/menu-3.jpg';
import menu4 from '../../img/menu-4.jpg';

import { Link } from 'react-router-dom';
import axios from 'axios';


const getServicesApi = "http://localhost:8080/api/service/all";


function Home() {
    let url = "";
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(getServicesApi)
            .then((response) => {
                if (response.data.status === 200)
                    setServices(response.data.data);
            })
    }, [])

    return (
        <>
            {/* Hero Section */}
            <div className="bg-dark hero-header mb-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link to={url} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section Ends */}

            {/* Services Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {
                            services.map((data, item) => {
                                return (
                                    <div key={item} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item rounded pt-3">
                                            <div className="p-4">
                                                <i className={data.icon + ' fa-3x text-primary mb-4'}></i>
                                                <h5>{data.tag}</h5>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Services Section Ends */}

            {/* About section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" alt="" data-wow-delay="0.1s" src={about1} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.3s" src={about2} style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" alt="" data-wow-delay="0.5s" src={about3} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" alt="" data-wow-delay="0.7s" src={about4} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                            <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Years of</p>
                                            <h6 className="text-uppercase mb-0">Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Popular</p>
                                            <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About section Ends */}

            {/* Menu Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 className="mb-5">Most Popular Items</h1>
                    </div>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" to="#tab-1">
                                    <i className="fa fa-coffee fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Popular</small>
                                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" to="#tab-2">
                                    <i className="fa fa-hamburger fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Special</small>
                                        <h6 className="mt-n1 mb-0">Launch</h6>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" to="#tab-3">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Lovely</small>
                                        <h6 className="mt-n1 mb-0">Dinner</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu1} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu2} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu3} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu4} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu1} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu2} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu3} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu1} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu2} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={menu3} alt="" style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu Section Ends */}

            {/* Contact-us Section */}
            <div className="py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="video">
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/SqcY0GlETPk" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                            <h1 className="text-white mb-4">Book A Table Online</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label htmlFor="datetime">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select" id="select1">
                                                <option value="1">People 1</option>
                                                <option value="2">People 2</option>
                                                <option value="3">People 3</option>
                                            </select>
                                            <label htmlFor="select1">No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <iframe title='Video' className="embed-responsive-item" src="https://www.youtube.com/embed/SqcY0GlETPk" id="video" allowFullScreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact-us Section Ends */}

        </>
    )
}

export default Home