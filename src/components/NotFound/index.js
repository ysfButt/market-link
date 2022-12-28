import React from 'react';
import Button from '@mui/material/Button';

const NotFound = ({ history }) => {
  return (
    <div className="not-found">
      <div className="text-center error-page pd-30">
        <h4 className="page-title"><strong>404</strong> Page Not Found</h4>
        <p>Oopps. The Page you were looking for doesn't exist</p>
        <figure className="error-img">
          <img src={`${process.env.REACT_APP_CDN_URL}/assets/404-page_ziaq0x.png`} alt="" />
        </figure>
        <p>You may have mistyped the address or the page may have moved.</p>
        <Button variant="contained" onClick={() => history.push('/')}>Go Back</Button>
      </div>
    </div>
  )
};

NotFound.propTypes = {};

export default NotFound;
