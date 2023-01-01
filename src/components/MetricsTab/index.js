import React from 'react';
import Button from '@mui/material/Button';

// Compoenets
import FiltersNode from './FiltersNode';
import ChartCards from './ChartCards';
import CustomRangePicker from './CustomRangePicker';

const MetricsTab = ({ theme }) => {

  return (
    <div className="metrics-tab">
      <div className="filter-by-wrap">
        <p>Filter nodes by</p>
        <div className="filter-by-btns">
          <Button variant="contained" className="active">Link Rewards</Button>
          <Button variant="contained">Feeds Supported</Button>
          <Button variant="contained">Updates</Button>
          <Button variant="contained">All Mainnets</Button>
          <Button variant="contained">User Selected</Button>
        </div>
        <p>Selected 5 nodes</p>
        <FiltersNode />
      </div>
      <div className="multi-actions-wrap">
        <div className="radio-btn-wrap">
          <Button variant="contained">1D</Button>
          <Button variant="contained" className="active">7D</Button>
          <Button variant="contained">1M</Button>
        </div>
        <CustomRangePicker theme={theme} />
      </div>
      <h3 className="heading">Feed Metrics</h3>
      <ChartCards />
    </div>
  )
};

export default MetricsTab;
