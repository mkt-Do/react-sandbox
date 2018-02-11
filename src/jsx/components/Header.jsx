import React from 'react';
import { Link } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { FlatButton } from 'material-ui';

const Header = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <FlatButton label='HOME' containerElement={<Link to="/" />}/>
      <FlatButton label='COUNTER' containerElement={<Link to="/counter" />}/>
    </div>
  </MuiThemeProvider>
);

export default Header;

