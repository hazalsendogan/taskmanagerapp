import React, { Component } from "react";
import { Card, CardContent, Link, withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
  cardWrapper: {
    marginTop:50
  },
  root: {
    '&:last-child': {
      paddingBottom: 0
    }
  },
  list: {
    listStyle: 'none',
    margin:0,
    padding:0
  },
  listItem: {
    paddingBottom: '15px'
  },
  listLink: {
    display: 'block'
  }
});

class Sidenav extends Component {
  render() {
    const { classes, drawerListItems } = this.props;
    return (
      <Card className={classes.cardWrapper}>
        <CardContent className={classes.root}>
          <nav>
            <ul className={classes.list}>
              {drawerListItems.map((item) => (
                <li key={item.id} className={classes.listItem}>
                  <Link href={item.to} className={classes.listLink}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Sidenav);
