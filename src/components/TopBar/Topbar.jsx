import React from 'react';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import './topbar.scss';

const Topbar = () => {
  return (
    <nav className="tobBar active" id="nav">
      <div className="wrapper">
        <section className="left">
          <a href="#intro" className="navLogo">
            ~Design
          </a>
          <div className="contactContainer">
            <PersonIcon className="icon" />
            <span>+91 9757433627</span>
          </div>
          <div className="contactContainer">
            <LocalPostOfficeIcon className="icon" />
            <span>angkithashamsa21@gmail.com</span>
          </div>
        </section>
        <section className="right">
          <IconButton sx={{ color: '#150234' }} aria-label="upload picture" component="span">
            <MenuIcon />
          </IconButton>
        </section>
      </div>
    </nav>
  );
};

export default Topbar;
