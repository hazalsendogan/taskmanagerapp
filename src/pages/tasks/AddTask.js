import React, { Component } from "react";
import { Grid, TextField, withStyles, Typography } from "@material-ui/core";

const customStyles = (theme) => ({
  root: {
    paddingTop: 50,
  },
  pageHeading: {
    marginBottom: 20,
  },
});

class AddTask extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <Typography variant="h4" className={classes.pageHeading}>
          My Tasks
        </Typography>
        <Grid container spacing={3}>
          <Grid item md="6">
            <TextField
              id="taskId"
              variant="outlined"
              label="Task Id"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskName"
              variant="outlined"
              label="Task Name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="parentTaskId"
              variant="outlined"
              label="Parent Task Id"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="parentTaskName"
              variant="outlined"
              label="Parent Task Name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskComment"
              variant="outlined"
              label="Task Comment"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskDescription"
              variant="outlined"
              label="Task Description"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskList Id"
              variant="outlined"
              label="Task List Id"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskListName"
              variant="outlined"
              label="Task List Name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="taskOwner"
              variant="outlined"
              label="Task Owner"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="createdFrom"
              variant="outlined"
              label="Created From"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="startDate"
              variant="outlined"
              label="Start Date"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="dueDate"
              variant="outlined"
              label="Due Date"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="%Completed"
              variant="outlined"
              label="% Completed"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="priority"
              variant="outlined"
              label="Priority"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="customStatus"
              variant="outlined"
              label="Custom Status"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="workHours"
              variant="outlined"
              label="Work Hours"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="workHoursUnit"
              variant="outlined"
              label="Work Hours Unit"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="CompletedOn"
              variant="outlined"
              label="Completed On"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="milestoneName"
              variant="outlined"
              label="Milestone Name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="milestoneStart Date"
              variant="outlined"
              label="Milestone Start Date"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item md="6">
            <TextField
              id="milestoneEndDate"
              variant="outlined"
              label="Milestone Due Date"
              fullWidth
            ></TextField>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(customStyles)(AddTask);
