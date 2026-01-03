import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div className="container">
            <div className="row text-center mt-5 p-5 gap-3  mb-5">
                <h3>Zerodha Products</h3>
            <h5>Sleek, modern, and intuitive trading platforms</h5>
            <p>Check out our <Link to='#'>investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link></p>
            </div>
        </div>
      );
}

export default Hero;