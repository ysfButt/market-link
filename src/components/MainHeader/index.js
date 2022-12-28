import React, { useEffect } from 'react';

const MainHeader = () => {

  useEffect(() => {
    window.onscroll = () => {
      let mainHeader = document.getElementsByClassName("main-header");
      mainHeader = mainHeader[0] ? mainHeader[0] : null;
      if (!mainHeader) return;

      if (window.pageYOffset > 50) mainHeader.className.add("fixed");
      else mainHeader.className.remove("fixed");
    }
  });

  return (
    <header className="main-header">
      header
    </header>
  );
}

MainHeader.propTypes = {};

export default MainHeader;
