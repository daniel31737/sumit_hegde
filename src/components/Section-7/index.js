import React, { Component } from 'react';
import ContextSection7 from './Children/ContextSection_7';
import ButtonBook from '../Section-1/Children/ButtonBook';

class Section7 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="content-section7">
                        <ContextSection7 />
                        <div className="btn">
                            <ButtonBook />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section7;