import React from 'react'

const LoadingPage = () => (
    <div className="loader">
        <img
          className="loader-image"
          src={process.env.PUBLIC_URL + '/loader.gif'}
          alt="loader-img"
        />
    </div>
);

export default LoadingPage;