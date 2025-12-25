import React from 'react';

function Awards () {
    return (
<div className="container mt-5">
    <div className="row">
        <div className="col-6 p-5">
            <img src="media/images/largestBroker.svg" alt="BrokerImage" />
        </div>
        <div className="col-6 p-5">
            <h1>Largest stock broker in India</h1>
            <p >Zerodha is the largest and most reputed stock broker in India with over 6 million clients. We are trusted by more than 15% of all retail investors across India.</p>
            <div className="row mt-5 ">
                <div className="col-6">
                    <ul>
                        <li>Future and Options</li>
                        <li>Comodiety derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                </div>
                <div className="col-6">
                     <ul>
                        <li>Stocks and IPO's</li>
                        <li>Direct Mutual Funds</li>
                        <li>Bonds and Govt. Security</li>
                    </ul>
                </div>
                <img src="media\images\pressLogos.png" className='mt-3' alt="pressLogos" style={{width : "90%"}} />
            </div>

        </div>
    </div>
</div>
      );
}

export default Awards;