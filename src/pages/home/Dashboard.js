import React, { Component } from 'react'

export default class Dashboard extends Component {
    
    render() {
        const {className} = this.props;
        return (
            <main className={className}>
                <h2>Dashboard</h2>
            </main>
        )
    }
}
