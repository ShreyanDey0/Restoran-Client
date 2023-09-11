import React, { useEffect, useState } from 'react';

import NavHero from '../navHero';
import axios from 'axios';

const getServicesApi = "http://localhost:8080/api/service/all";

function Services() {

    const [service, setService] = useState([]);

    useEffect(() => {
        axios.get(getServicesApi)
            .then((response) => {
                if (response.data.status === 200)
                    setService(response.data.data);
            })
    }, [])


    return (
        <>

            <NavHero title="Services" />

            {/* Services Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {
                            service.map((data, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item rounded pt-3">
                                            <div className="p-4">
                                                <i className={data.icon + ' fa-3x text-primary mb-4'}></i>
                                                <h5>{data.name}</h5>
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



        </>
    )
}

export default Services