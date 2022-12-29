import React from 'react';

// Components
import MainFooter from '../components/MainFooter';

// Layout
import LayoutRoutes from '../components/LayoutRoutes';
import Aside from 'components/Aside';

const AppLayout = props => {
  const { routes } = props;
  
  return (
    <div className="layout">

      {/* Main Aside */}
      <Aside />
      {/* Main Aside End */}

      {/* Main Content */}
      <main className="main-content">

        {/* Layout Routes Or Pages To Render */}
        <LayoutRoutes {...props} routes={routes} />
        {/* Layout Routes Or Pages To Render End */}
        
        {/* Main Footer */}
        <MainFooter />
        {/* Main Footer End */}

      </main>
      {/* Main Content End */}

    </div>
  )
};

export default AppLayout;
