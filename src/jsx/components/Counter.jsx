import React from 'react';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { FlatButton } from 'material-ui';

const Counter = ({ num, increment, decrement, incrementAsync }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <span className="app-component">{num}</span>
      <FlatButton onClick={() => increment()}>+</FlatButton>
      <FlatButton onClick={() => decrement()}>-</FlatButton>
      <FlatButton onClick={() => incrementAsync()}>ASYNC +</FlatButton>
    </div>
  </MuiThemeProvider>
);

export default Counter;

