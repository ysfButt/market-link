import React from 'react';
import { createTheme } from '@mui/material/styles';

// Components
import MainFooter from '../components/MainFooter';

// Layout
import LayoutRoutes from '../components/LayoutRoutes';
import Aside from 'components/Aside';


// Global theme for app
const theme = createTheme({
  palette: {
    primary: {
      main: '#343AC8',
    },
  },
});

const AppLayout = props => {
  const { routes } = props;
  
  return (
    <div className="layout">

      {/* Main Aside */}
      <Aside theme={theme} />
      {/* Main Aside End */}

      {/* Main Content */}
      <main className="main-content">

        {/* Layout Routes Or Pages To Render */}
        <LayoutRoutes {...props} routes={routes} theme={theme} />
        {/* Layout Routes Or Pages To Render End */}
        
        {/* Main Footer */}
        <MainFooter theme={theme} />
        {/* Main Footer End */}

      </main>
      {/* Main Content End */}

    </div>
  )
};

export default AppLayout;
