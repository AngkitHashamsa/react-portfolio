import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import sideBarData from 'constants/menuData';
import './sidebar.scss';

const Sidebar = ({ open, setMenuOpen }) => (
  <aside className={`sidebarContainer ${open && 'active'}`}>
    <IconButton
      className={`iconButton ${open && 'active'} `}
      onClick={() => setMenuOpen(!open)}
      aria-label="upload picture"
      component="span"
    >
      <CloseIcon sx={{ fontSize: 32 }} />
    </IconButton>
    <ul>
      {sideBarData.map(({ anchor, value }) => (
        <li key={anchor} onClick={() => setMenuOpen(!open)}>
          <a href={anchor}>{value}</a>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
