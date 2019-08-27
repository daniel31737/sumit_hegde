import React, { Component } from 'react';
import SectionLeft5 from './Children/SectionLeft_5';
import SectionRight5 from './Children/SectionRight_5';

class Section5 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <SectionLeft5 />
                    </div>
                    <div className="col-md-6">
                        <SectionRight5 />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section5;