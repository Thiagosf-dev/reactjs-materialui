import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

          <Button variant="contained" color="primary">Button</Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
