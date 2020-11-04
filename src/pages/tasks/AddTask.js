import React, { Component } from 'react';


export default class AddTask extends Component {
    render() {
        const {className} = this.props;
        return (
            <main className={className}>
                <h2>Add Task Component</h2>
            </main>
        )
    }
}
