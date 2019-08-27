import React, { Component } from 'react';
import ContextSection10 from './Children/ContextSection_10';
import SubmitForm from './Children/SubmitForm';

class Section10 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ContextSection10 />
                    <SubmitForm />
                </div>
            </div>
        )
    }
}

export default Section10;