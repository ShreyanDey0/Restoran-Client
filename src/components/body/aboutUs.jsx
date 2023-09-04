import React from 'react';
import about1 from '../../img/about-1.jpg';
import about2 from '../../img/about-2.jpg';
import about3 from '../../img/about-3.jpg';
import about4 from '../../img/about-4.jpg';

import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import team4 from '../../img/team-4.jpg';

import NavHero from '../navHero';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
      
      <NavHero title="About-Us"/>


      {/* About section */}
      <div className="container-xxl py-5">
          <div className="container">
              <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                      <div className="row g-3">
                          <div className="col-6 text-start">
                              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" alt="" src={about1}/>
                          </div>
                          <div className="col-6 text-start">
                              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" alt="" src={about2} style={{marginTop : '25%'}}/>
                          </div>
                          <div className="col-6 text-end">
                              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" alt="" src={about3}/>
                          </div>
                          <div className="col-6 text-end">
                              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" alt="" src={about4}/>
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


      {/* Teams section */}
      <div className="container-xxl pt-5 pb-3">
          <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                  <h1 className="mb-5">Our Master Chefs</h1>
              </div>
              <div className="row g-4">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item text-center rounded overflow-hidden">
                          <div className="rounded-circle overflow-hidden m-4">
                              <img className="img-fluid" src={team1} alt=""/>
                          </div>
                          <h5 className="mb-0">Full Name</h5>
                          <small>Designation</small>
                          <div className="d-flex justify-content-center mt-3">
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="team-item text-center rounded overflow-hidden">
                          <div className="rounded-circle overflow-hidden m-4">
                              <img className="img-fluid" src={team2} alt=""/>
                          </div>
                          <h5 className="mb-0">Full Name</h5>
                          <small>Designation</small>
                          <div className="d-flex justify-content-center mt-3">
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="team-item text-center rounded overflow-hidden">
                          <div className="rounded-circle overflow-hidden m-4">
                              <img className="img-fluid" src={team3} alt=""/>
                          </div>
                          <h5 className="mb-0">Full Name</h5>
                          <small>Designation</small>
                          <div className="d-flex justify-content-center mt-3">
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="team-item text-center rounded overflow-hidden">
                          <div className="rounded-circle overflow-hidden m-4">
                              <img className="img-fluid" src={team4} alt=""/>
                          </div>
                          <h5 className="mb-0">Full Name</h5>
                          <small>Designation</small>
                          <div className="d-flex justify-content-center mt-3">
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-twitter"></i></Link>
                              <Link className="btn btn-square btn-primary mx-1" to=""><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Teams section ends */}


    </>
  )
}

export default AboutUs