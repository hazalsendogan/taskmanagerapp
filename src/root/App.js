import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Bar from "../components/header/Bar";
import Sidenav from "../components/sidenav/Sidenav";
import Dashboard from "../pages/home/Dashboard";
import AddTask from "../pages/tasks/AddTask";
import Tasks from "../pages/tasks/Tasks";
import { withStyles, CssBaseline } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      drawerListItems: [
        {id:1,name: 'Dashboard', to: '/'},
        {id:2,name: 'My Tasks', to: '/mytasks'},
        {id:3,name: 'Add Tasks', to: '/addtask'}
      ]
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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/mytasks" component={Tasks} />
          <Route exact path="/addtask" component={AddTask} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
