import { Typography } from '@material-ui/core';
import React, { Component } from 'react'

export default class Dashboard extends Component {
    
    render() {
        const {className} = this.props;
        return (
            <main className={className}>
                <Typography variant="h2">Welcome to app</Typography>
            </main>
        )
    }
}
