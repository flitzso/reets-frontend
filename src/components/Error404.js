import React from 'react';
import Moe from '../components/imgs/404-pinguin.gif';

const Error404 = () => {
  return (
    <div className="gif-container">
      <a href='/' >
      <img src={Moe} alt="GIF" className="gif-image" />
      </a>
    </div>
  );
};

export default Error404;