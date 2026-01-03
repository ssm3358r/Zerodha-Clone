import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className="container mt-5">
           <div className="row">
            <div className="col-6 ">
               <img src="media\images\education.svg" alt="" />
           </div>   
           <div className="col-6 p-5">
            <h2>Free and Open Market Education</h2>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <Link className=' fs-5'style={{textDecoration : "none"}} to="#">Varsity &nbsp; 
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Link>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <Link className=' fs-5'style={{textDecoration : "none"}} to="#">TradingQ&A  &nbsp;  
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Link>
           </div>
        </div>
    </div> 
      );
}

export default Education;