import React from 'react'

function Team() {
    return ( 
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
        <h3 className="text-center fs-4  mb-5 ">
         People
        </h3>
        <div className="col-5  text-center text-muted">
            <img style={{width:"55%",borderRadius:"100%"}} src="media\images\nithinKamath.jpg" alt="" />
            <h4 className='mt-4 '>Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-7  fs-6 px-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

</p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p> 
          <p>Playing basketball is his zen.
          </p>
          <p>Connect on &nbsp;<a href='#'> Homepage</a>   /  <a href='#'>TradingQnA </a>  / <a href='#'>Twitter </a> </p>
        </div>
      </div>
      
            </div>
        </div>
     );
}

export default Team;