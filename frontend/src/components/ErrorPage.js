import React from 'react';

export default function ErrorPage() {
    return(
        <div>
            <img src={require('./images/error.png')} />
            <div>
                <h1>404</h1>
                <br/>
                <h3>SOrRy, Page not found</h3>
            </div>
        </div>
    );
}