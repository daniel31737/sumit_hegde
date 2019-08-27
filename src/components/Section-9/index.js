import React, { Component } from 'react';
import ContextSection9 from './Children/ContextSection_9';
import ButtonBook from '../Section-1/Children/ButtonBook';

class Section9 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="content-section-9">
                        <ContextSection9 />
                        <div className="btn">
                            <ButtonBook />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Section9;