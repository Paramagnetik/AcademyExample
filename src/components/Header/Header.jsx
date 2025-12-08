import { AppBar, Toolbar, Typography } from '@mui/material';

import './Header.css';

export default function Header() {
  return (
    <>
      <AppBar position="sticky" elevation={6}>
        <div className="header-container">
          <Toolbar className="toolbar" disableGutters>
            <Typography variant="h6" className="logo">
              Академия образования — Григорий
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
}
