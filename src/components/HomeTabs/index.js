import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Components
import MetricsTab from 'components/MetricsTab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HomeTabs = ({ theme }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home-tabs">
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="METRICS" {...a11yProps(0)} />
        <Tab label="NODES" {...a11yProps(1)} />
        <Tab label="FEEDS" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MetricsTab theme={theme} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        NODES
      </TabPanel>
      <TabPanel value={value} index={2}>
        FEEDS
      </TabPanel>
    </div>
  );
}

export default HomeTabs;
