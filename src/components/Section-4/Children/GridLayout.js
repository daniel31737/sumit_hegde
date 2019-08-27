import React, { Component } from 'react'

export default class GridLayout extends Component {
    render() {
        return (
            <div className="col-md-4">
                <p><img src={ this.props.src } alt={ this.props.alt } /></p>
                <div className="content-layout">{ this.props.children }</div>
            </div>
        )
    }
}
