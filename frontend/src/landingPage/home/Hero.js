import React from 'react';

function Hero() {
    return ( <div className="container p-5">
        <div className="row text-center">
            <img src="media/images/homeHero.png" alt="HeroImage"  className='mb-5 p-5' />
            <h1>Invest in everything</h1>
        <p className='fs-5'>Online platfrom to invest in stocks , derivatives , mutual funds , ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5' style={{width:"15%" ,margin:"0 auto"}}>Sign up for free</button>
        </div>
        
    </div>
        
     );
}

export default Hero;