import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaX } from 'react-icons/fa';

const Header = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="header-container">
      <h1>Follow Us</h1>
      <div className="social-media-icons">
        <Link to="#" onClick={() => openLink('https://www.facebook.com')}>
          <FaFacebook size={30} />
        </Link>
        <Link to="#" onClick={() => openLink('https://www.instagram.com')}>
          <FaInstagram size={30} />
        </Link>
        <Link to="#" onClick={() => openLink('https://www.youtube.com')}>
          <FaYoutube size={30} />
        </Link>
        <Link to="#" onClick={() => openLink('https://twitter.com')}>
          <FaX size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
