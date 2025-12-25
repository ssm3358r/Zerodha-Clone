import React from 'react';

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
              <a className=' fs-5'style={{textDecoration : "none"}} href="">Varsity &nbsp; 
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a className=' fs-5'style={{textDecoration : "none"}} href="">TradingQ&A  &nbsp;  
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
           </div>
        </div>
    </div> 
      );
}

export default Education;