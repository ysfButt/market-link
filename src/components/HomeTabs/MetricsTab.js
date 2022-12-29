import React from 'react';
import Grid from '@mui/material/Grid';

const MetricsTab = () => {
  return (
    <div className="metrics-tab">
      <div className="filter-by-wrap">
        <p>Filter nodes by</p>
        <div className="filter-by-links">
          <a href="/">Link Rewards</a>
          <a href="/">Feeds Supported</a>
          <a href="/">Updates</a>
          <a href="/">All Mainnets</a>
          <a href="/">User Selected</a>
        </div>
        <p>Selected 5 nodes</p>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            col
          </Grid>
          <Grid item xs={12} lg={4}>
            col
          </Grid>
          <Grid item xs={12} lg={4}>
            col
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default MetricsTab;
