import React, { Component } from 'react'
import SectionLeft1 from './Children/SectionLeft_1';
import SectionRight1 from './Children/SectionRight_1';

export default class Section1 extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <SectionLeft1 />
                </div>
                <div className="col-md-6">
                    <SectionRight1 />
                </div>
            </div>
        )
    }
}
