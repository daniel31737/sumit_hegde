import React, { Component } from 'react'
import SectionLeft2 from './Children/SectionLeft_2';
import SectionRight2 from './Children/SectionRight_2';

export default class Section2 extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <SectionLeft2 />
                </div>
                <div className="col-md-6">
                    <SectionRight2 />
                </div>
            </div>
        </div>
        )
    }
}
