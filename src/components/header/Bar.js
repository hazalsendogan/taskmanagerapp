import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
      
});

class Bar extends Component {
  render() {
    const { classes, className } = this.props;
    return (
      <AppBar position="static" className={className}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(useStyles)(Bar);
