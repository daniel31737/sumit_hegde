import React, { Component } from 'react';
import Title3 from './Children/Title_3';
import SectionLeft3 from './Children/SectionLeft_3';
import SectionRight3 from './Children/SectionRight_3';

class Section3 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="content-section3">
                        <Title3 />
                        <SectionLeft3 />
                        <SectionRight3 />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section3;