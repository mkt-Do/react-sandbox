import React from 'react';
import { Link } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { cyanA400 } from 'material-ui/styles/colors';

const Header = ({open, onToggleOpen}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={() => onToggleOpen()}
      >
        <MenuItem
          primaryText='Home'
          containerElement={<Link to='/' />}
          onClick={() => onToggleOpen()}
        />
        <MenuItem
          primaryText='Counter'
          containerElement={<Link to='/counter' />}
          onClick={() => onToggleOpen()}
        />
      </Drawer>
      <AppBar
        style={{ backgroundColor: cyanA400 }}
        position='static'
        title='Title'
        titleStyle={{textAlign: 'center'}}
        onLeftIconButtonClick={() => onToggleOpen()}
      />
    </div>
  </MuiThemeProvider>
);

export default Header;

