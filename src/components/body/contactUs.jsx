import React from 'react';
import NavHero from '../navHero';
import { useState } from 'react';


function ContactUs() {


    const [user,setUser] = useState({name:'',email:'',date_time: '', peoples: '', special: ''});

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <NavHero title="Contact-Us"/>

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
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text"
                                                value={user.name}
                                                onChange={e => setUser({...user, name: e.target.value })} 
                                                className="form-control" name="name" id="name" placeholder="Your Name"/>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email"
                                                value={user.email}
                                                onChange={e => setUser({...user, email: e.target.value })}
                                                className="form-control" name="email" id="email" placeholder="Your Email"/>
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="datetime-local"
                                                value={user.date_time}
                                                onChange={e => setUser({...user, date_time: e.target.value })}
                                                name="date_time" className="form-control" id="datetime" placeholder="Date & Time"/>
                                            <label htmlFor="datetime">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select
                                                value={user.peoples}
                                                onChange={e => setUser({...user, peoples: e.target.value })}
                                                name='peoples' className="form-select" id="select1">
                                                    <option value="1">People 1</option>
                                                    <option value="2">People 2</option>
                                                    <option value="3">People 3</option>
                                            </select>
                                            <label htmlFor="select1">No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                value={user.special}
                                                onChange={e => setUser({...user, special: e.target.value })}
                                                className="form-control" name='special' placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                            <label htmlFor="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary w-100 py-3">Book Now</button>
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
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/SqcY0GlETPk" id="video" allowFullScreen allowscriptaccess="always"
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

export default ContactUs