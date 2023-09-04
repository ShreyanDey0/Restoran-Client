import React from 'react';
import HTMLReactParser from 'html-react-parser';

import NavHero from '../navHero';

function Services() {

  var services = [
      {
          'icon' : '<i className="fa fa-3x fa-user-tie text-primary mb-4"></i>',
          'tag' : 'Master Chefs',
          'description' : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
      },
      {
          'icon' : '<i className="fa fa-3x fa-utensils text-primary mb-4"></i>',
          'tag' : 'Quality Food',
          'description' : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
      },
      {
          'icon' : '<i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>',
          'tag' : 'Online Order',
          'description' : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
      },
      {
          'icon' : '<i className="fa fa-3x fa-headset text-primary mb-4"></i>',
          'tag' : '24/7 Service',
          'description' : 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
      }
  ];

  return (
    <>
      
      <NavHero title="Services"/>

      {/* Services Section */}
      <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    {
                        services.map( (data,index) =>{
                            return (
                                <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item rounded pt-3">
                                        <div className="p-4">
                                            { HTMLReactParser(data.icon)}
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
      


    </>
  )
}

export default Services