import React from 'react';
import { Avatar } from '@mui/material';

// Componets
import HomeTabs from 'components/HomeTabs';

const Home = ({ theme }) => {

  return (
    <div className="home-page">
      <div className="subheder">
        <div className="node-caption">
          <Avatar alt="Remy Sharp" src="https://lp-market.imgix.net/images/5c7143dd-3276-4e0c-8c4f-53e50acf6554?w=60&h=60&bg=FFFFFF&dpr=1" />
          <div className="caption">
            <p>Node group</p>
            <strong className='title'>DexTrac</strong>
          </div>
        </div>
        <div className="node-details">
          <div className="caption">
            <p>Total number of nodes</p>
            <strong className='title'>23 Nodes</strong>
          </div>
          <div className="caption">
            <p>Rewards (24h)</p>
            <strong className='title'>846.70 LINK</strong>
          </div>
          <div className="caption">
            <p>Updates (24h)</p>
            <strong className='title'>483.28K</strong>
          </div>
        </div>
      </div>
      <div>
        <HomeTabs theme={theme} />
      </div>
    </div>
  )
};

export default Home;
