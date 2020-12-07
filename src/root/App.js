import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Bar from "../components/header/Bar";
import Sidenav from "../components/sidenav/Sidenav";
import Dashboard from "../pages/home/Dashboard";
import AddTask from "../pages/tasks/AddTask";
import Tasks from "../pages/tasks/Tasks";
import { Container, CssBaseline, Grid } from "@material-ui/core";

class App extends Component {
  state = {
    drawerListItems: [],
  };

  componentDidMount() {
    this.getDrawerList();
  }

  getDrawerList = () => {
    let url = "http://localhost:3000/drawerListItems";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ drawerListItems: data }));
  };
  render() {
    const { drawerListItems } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />

        <Bar />
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Sidenav drawerListItems={drawerListItems} />
            </Grid>
            <Grid item md={10}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <Dashboard {...props} />}
                />
                <Route
                  exact
                  path="/mytasks"
                  render={(props) => <Tasks {...props} />}
                />
                <Route
                  exact
                  path="/addtask"
                  render={(props) => <AddTask {...props} />}
                />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
