import React from 'react';

const Preloader = () => {
  return(
    <div className="preloader">
      <img src={require('../assets/loading.png')} alt="loading"/>
    </div>
  )
}

export default Preloader;