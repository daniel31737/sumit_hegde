import React, { Component } from 'react'

export default class ContextSection6 extends Component {
    render() {
        return (
            <div className="col-md-6">
                <p><img src={ this.props.src } alt={ this.props.alt } /></p>
                <div className="content-section-6">{ this.props.children }</div>
            </div>
        )
    }
}
