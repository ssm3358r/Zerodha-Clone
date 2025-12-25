import React from 'react';

function LeftSection({imgUrl,title,desc,link1,link2,googlePlay,appStore,dash1,dash2}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7 p-5 text-center">  
                    <img src={imgUrl}  alt="" />
                </div>
                <div className="col-5 p-5">
                    <h3 className='py-4 mb-3'>{title}</h3>
                    <p>{desc}</p>
                   <div className='mb-4 gap-3 d-flex' >
                     <a href="#">{link1}<i class={dash1}></i></a>
                    <a href="#">{link2}<i class={dash2}></i></a>
                   </div>
                    <div className='gap-3 d-flex'>
                        <img src={googlePlay} alt="GooglePlayImage" />
                    <img src={appStore} alt="AppleStoreImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;