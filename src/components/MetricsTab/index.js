import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

// Compoenets
import FiltersNode from './FiltersNode';
import ChartCards from './ChartCards';
import CustomRangePicker from './CustomRangePicker';

const MetricsTab = ({ theme }) => {

  // States
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if(loading) {
  //     setTimeout(() => {
        
  //     }, timeout);
  //     setLoading(false);
  //   }
  // },loading);

  return (
    <div className="metrics-tab">
      <div className="filter-by-wrap">
        <p>Filter nodes by</p>
        <div className="filter-by-btns">
          <Button variant="contained" className="active" onClick={() => setLoading(!loading)}>Link Rewards</Button>
          <Button variant="contained" onClick={() => setLoading(!loading)}>Feeds Supported</Button>
          <Button variant="contained" onClick={() => setLoading(!loading)}>Updates</Button>
          <Button variant="contained" onClick={() => setLoading(!loading)}>All Mainnets</Button>
          <Button variant="contained" onClick={() => setLoading(!loading)}>User Selected</Button>
        </div>
        <p>Selected 5 nodes</p>
        <FiltersNode loading={loading} />
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
