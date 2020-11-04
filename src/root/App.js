import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Bar from "../components/header/Bar";
import Sidenav from "../components/sidenav/Sidenav";
import Dashboard from "../pages/home/Dashboard";
import AddTask from "../pages/tasks/AddTask";
import Tasks from "../pages/tasks/Tasks";
import { withStyles, CssBaseline } from "@material-ui/core";
const drawerWidth = 240;
const appBarHeight = 64;

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: '100%',
      maxHeight: appBarHeight
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
  },
  content: {
    marginTop: appBarHeight,
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.up("sm")]: {
      marginTop: appBarHeight + (appBarHeight * 1 / 4),
      marginLeft: drawerWidth + (drawerWidth * 1/12)
    },
    [theme.breakpoints.up("md")]: {
      marginTop: appBarHeight + (appBarHeight * 1 / 4),
      marginLeft: drawerWidth + drawerWidth * 1 / 12
    },
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle = () => {
    let mobileOpen = this.state.mobileOpen;
    this.setState = {
      mobileOpen: !mobileOpen,
    };
  };

  render() {
    const { classes } = this.props;
    const { mobileOpen,drawerListItems } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Bar
          className={classes.appBar}
        
        />
        <Sidenav
          handleDrawerToggle={this.handleDrawerToggle}
          drawerListItems={drawerListItems}
          mobileOpen={mobileOpen}
          className={classes.drawer}
        />
        <Switch>
          <Route exact path="/" render={(props) => (
            <Dashboard {...props} className={classes.content}/>
          )}/>
          <Route exact path="/mytasks" render={(props) => (
            <Tasks {...props} className={classes.content}/>
          )}/>
          <Route exact path="/addtask" render={(props) => (
            <AddTask {...props} className={classes.content}/>
          )} />
        </Switch>

      </div>
    );
  }
}

export default withStyles(useStyles)(App);
