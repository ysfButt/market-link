import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

const FiltersNode = ({loading}) => {

  const nodesList = [
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/ETHEREUM.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Ethereum Mainnet (1)',
      link: '213.40 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/BINANCE.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Binance Mainnet (2)',
      link: '114.15 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/OPTIMISM.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Optimism Mainnet',
      link: '66.86 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/AVALANCHE.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Avalanche Mainnet (1)',
      link: '38.71 LINK',
    }
  ]

  return (
    <div className="nodes-wrap">
      {loading ?
        <div className="app-loader">
          <CircularProgress />
        </div>
        :
        <Grid container spacing={1.5}>
          {nodesList.map((item, i) => (
            <Grid item xs={12} lg={4} key={i}>
              <Button variant="contained" className="node-btn">
                <p className="node-detail">
                  <img src={item.imgPath} alt="" />
                  {item.title}
                </p>
                <p className="node-link">{item.link}</p>
              </Button>
            </Grid>
          ))}
          <Grid item xs={12} lg={4}>
            <Button variant="contained" className="node-btn">
              <p className="node-add">Add nodes to compare</p>
            </Button>
          </Grid>
        </Grid>
      }
    </div>
  )
};

export default FiltersNode;
