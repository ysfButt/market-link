import React from 'react';

// Componets
import MainLogo from 'icons/MainLogo';
import PoweredByIcon from 'icons/PoweredByIcon';

const Aside = () => {
  return (
    <aside className="layout-aside">
      <a href="/" className="logo">
        <MainLogo />
      </a>
      <a href="/">
        <PoweredByIcon className="icon" />
        <span>Powered by <br />LinkPool</span>
      </a>
    </aside>
  )
};

Aside.propTypes = {};

export default Aside;
