import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 

        <div className="container text-center p-5">
             <h2>404 - Page Not Found</h2>
             <h1>Kiaan couldn’t find that page</h1>
        <p className='fs-5 text-muted my-4'>We couldn’t find the page you were looking for. 
            <Link to='/'>Visit Zerodha’s home page</Link>
        </p>
        </div>
     );
}

export default NotFound;