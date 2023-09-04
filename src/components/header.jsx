import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Header() {
    let url="/";
    const location = useLocation();
    return (
        <>
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href={url} className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to={url} className={`nav-item nav-link ${location.pathname === "/" ? 'active' : ''} `}>Home</Link>
                        <Link to="/about-us" className={`nav-item nav-link ${location.pathname === "/about-us" ? 'active' : ''} `}>About</Link>
                        <Link to="/services" className={`nav-item nav-link ${location.pathname === "/services" ? 'active' : ''} `}>Service</Link>
                        <Link to="/menu" className={`nav-item nav-link ${location.pathname === "/menu" ? 'active' : ''} `}>Menu</Link>
                        <div className="nav-item dropdown">
                            <Link to={url} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to={url} className="dropdown-item">Booking</Link>
                                <Link to={url} className="dropdown-item">Our Team</Link>
                                <Link to={url} className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to={"/contact-us"} className={`nav-item nav-link ${location.pathname === "/contact-us" ? 'active' : ''} `}>Contact</Link>
                    </div>
                    <Link to={url} className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>
        </div>

        {/* Back to top */}
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
        </>
    )
}

export default Header