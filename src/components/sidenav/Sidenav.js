import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { Link, withStyles } from "@material-ui/core";

const drawerWidth = 240;
const appBarHeight = 64;

const useStyles = (theme) => ({
  drawerPaper: {
    width: drawerWidth,
    marginTop: appBarHeight
  },
  toolbar: theme.mixins.toolbar,
});

class Sidenav extends Component {
  state = {
    drawerListItems: []
  }

  componentDidMount() {
    this.getDrawerList();
  }

  getDrawerList =  () => {

    let url = "http://localhost:3000/drawerListItems";

    fetch(url).then(response => response.json()).then(data => this.setState({drawerListItems:data}))

  }
  render() {
    const { classes} = this.props;
    const {drawerListItems} = this.state;
    const drawer = (
      <div>
        <List>
          {drawerListItems.map((item, index) => (
            <Link href={item.to} key={item.id}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <nav className={this.props.className}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={this.props.mobileOpen}
            onClose={this.props.handleDrawerToggle}
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles(useStyles)(Sidenav);
