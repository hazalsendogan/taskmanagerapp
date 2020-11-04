import React, { Component } from "react";

import {
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Grid,
  withStyles,
} from "@material-ui/core";

const customStyles = (theme) => ({
  pageHeading: {
    marginBottom: 20
  }
})

class Tasks extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    let url = "http://localhost:3000/tasks";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ tasks: data }));
  };
  render() {
    const { className, classes } = this.props;
    const { tasks } = this.state;
    return (
      <main className={className}>
        <Typography variant="h4" className={classes.pageHeading} >My Tasks</Typography>
        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={task.id}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {task.taskName}
                    </Typography>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        Priority:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="error"
                        component="span"
                      >
                        {task.priority}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        Due Date:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        component="span"
                      >
                        {task.dueDate}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        Status:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        component="span"
                      >
                        {task.customStatus}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    See Details 
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography />
      </main>
    );
  }
}

export default withStyles(customStyles)(Tasks);
