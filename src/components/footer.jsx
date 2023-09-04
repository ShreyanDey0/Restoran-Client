import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    let url="";
    return (
      <>
        <div className={"container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"} data-wow-delay="0.1s">
            <div className={"container py-5"}>
                <div className={"row g-5"}>
                    <div className={"col-lg-3 col-md-6"}>
                        <h4 className={"section-title ff-secondary text-start text-primary fw-normal mb-4"}>Company</h4>
                        <Link className={"btn btn-link"} to={url}>About Us</Link>
                        <Link className={"btn btn-link"} to={url}>Contact Us</Link>
                        <Link className={"btn btn-link"} to={url}>Reservation</Link>
                        <Link className={"btn btn-link"} to={url}>Privacy Policy</Link>
                        <Link className={"btn btn-link"} to={url}>Terms & Condition</Link>
                    </div>
                    <div className={"col-lg-3 col-md-6"}>
                        <h4 className={"section-title ff-secondary text-start text-primary fw-normal mb-4"}>Contact</h4>
                        <p className={"mb-2"}><i className={"fa fa-map-marker-alt me-3"}></i>123 Street, New York, USA</p>
                        <p className={"mb-2"}><i className={"fa fa-phone-alt me-3"}></i>+012 345 67890</p>
                        <p className={"mb-2"}><i className={"fa fa-envelope me-3"}></i>info@example.com</p>
                        <div className={"d-flex pt-2"}>
                            <Link className={"btn btn-outline-light btn-social"} to={url}><i className={"fab fa-twitter"}></i></Link>
                            <Link className={"btn btn-outline-light btn-social"} to={url}><i className={"fab fa-facebook-f"}></i></Link>
                            <Link className={"btn btn-outline-light btn-social"} to={url}><i className={"fab fa-youtube"}></i></Link>
                            <Link className={"btn btn-outline-light btn-social"} to={url}><i className={"fab fa-linkedin-in"}></i></Link>
                        </div>
                    </div>
                    <div className={"col-lg-3 col-md-6"}>
                        <h4 className={"section-title ff-secondary text-start text-primary fw-normal mb-4"}>Opening</h4>
                        <h5 className={"text-light fw-normal"}>Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className={"text-light fw-normal"}>Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div className={"col-lg-3 col-md-6"}>
                        <h4 className={"section-title ff-secondary text-start text-primary fw-normal mb-4"}>Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className={"position-relative mx-auto"} style={{maxWidth : '400px'}}>
                            <input className={"form-control border-primary w-100 py-3 ps-4 pe-5"} type="text" placeholder="Your email"/>
                            <button type="button" className={"btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"copyright"}>
                    <div className={"row"}>
                        <div className={"col-md-6 text-center text-md-start mb-3 mb-md-0"}>
                            &copy; Resturan@2023
                        </div>
                        <div className={"col-md-6 text-center text-md-end"}>
                            <div className={"footer-menu"}>
                                <Link to={url}>Home</Link>
                                <Link to={url}>Cookies</Link>
                                <Link to={url}>Help</Link>
                                <Link to={url}>FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link 
                to="#" 
                onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}
                className={"btn btn-lg btn-primary btn-lg-square back-to-top"}>
                    <i className={"bi bi-arrow-up"} style={{marginLeft : "-2.5px"}}></i>
            </Link>
        </div>  
      </>
    )
}

export default Footer