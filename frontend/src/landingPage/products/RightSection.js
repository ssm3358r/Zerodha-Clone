import React from 'react';
import {Link} from 'react-router-dom';
function RightSection({imgUrl,title,desc,link1,link2,googlePlay,appStore,dash1,dash2}) {
	return (
		 <div className="container ">
            <div className="row">

                 <div className="col-5 p-5 text-muted">
                    <h3 className='py-4 mb-3'>{title}</h3>
                    <p>{desc}</p>
                   <div className='mb-4 gap-3 d-flex' >
                    <Link to ="#">{link1}<i class={dash1}></i></Link>
                    <Link to ="#">{link2}<i class={dash2}></i></Link>
                   </div>
                    
                </div>
                <div className="col-7  ">  
                    <img src={imgUrl}  alt="" />
                </div>
               
            </div>
        </div>
	);
}

export default RightSection;
