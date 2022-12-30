import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const FiltersNode = () => {

  const nodesList = [
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    },
    {
      imgPath: 'https://lp-market.imgix.net/networks/POLYGON.png?w=25px&h=25px&bg=00FFFFFF&dpr=1',
      title: 'Polygon Mainnet (1)',
      link: '265.10 LINK',
    }
  ]

  return (
    <div className="nodes-wrap">
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
    </div>
  )
};

export default FiltersNode;
