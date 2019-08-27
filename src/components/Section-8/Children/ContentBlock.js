import React, { Component } from 'react'

export default class ContentBlock extends Component {
    render() {
        return (
            <div className="form-group">
                <img src={ this.props.src } alt={ this.props.alt } />
                <div>
                    <label>{ this.props.children }</label>
                    <p>{ this.props.description }</p>
                </div>
            </div>
        )
    }
}
