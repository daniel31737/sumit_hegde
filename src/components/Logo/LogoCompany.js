import React, { Component } from 'react';

class LogoCompany extends Component {
    render() {
        return (
            <img id={ this.props.id } src={ this.props.src } alt={ this.props.alt } />
        )
    }
}

export default LogoCompany;