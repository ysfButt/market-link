import React from 'react';
import { Button } from '@mui/material';

// Components
// import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import MainLogo from 'icons/MainLogo';

// Layout
import LayoutRoutes from '../components/LayoutRoutes';

const AppLayout = props => {
  const { routes } = props;
  
  return (
    <div className="layout">

      <aside className="layout-aside">
        <a href="/">
          <MainLogo />
        </a>
        <Button variant="contained">Go Back</Button>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Layout Routes Or Pages To Render */}
        <LayoutRoutes {...props} routes={routes} />
        {/* Layout Routes Or Pages To Render End */}

      </main>
      {/* Main Content End */}

      {/* Main Footer */}
      <MainFooter />
      {/* Main Footer End */}
    </div>
  )
};

export default AppLayout;
