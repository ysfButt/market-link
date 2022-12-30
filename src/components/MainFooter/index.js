import React from 'react';

// Icons
import TwitterIcon from 'icons/TwitterIcon';
import ChatIcon from 'icons/ChatIcon';
import EmailIcon from 'icons/EmailIcon';
import ReadIcon from 'icons/ReadIcon';

const MainFooter = (props) => {
  return (
    <footer className="footer">
      <p>LinkPool 2022</p>
      <ul className="footer-links">
        <li>
          <a href="/">Terms and Conditions</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">LinkPool Docs</a>
        </li>
      </ul>
      <ul className="footer-social-links">
        <li>
          <a href="/"><TwitterIcon /></a>
        </li>
        <li>
          <a href="/"><ChatIcon /></a>
        </li>
        <li>
          <a href="/"><EmailIcon /></a>
        </li>
        <li>
          <a href="/"><ReadIcon /></a>
        </li>
      </ul>
    </footer>
  )
};

MainFooter.propTypes = {};

export default MainFooter;
