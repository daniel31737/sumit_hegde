import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section1-left">
                            <h1>Your SaaS website is stopping you from doubling your MRR</h1>
                            <h4>I can help you change that.</h4>
                            <p>I help SaaS bussinesses convert visitors into customer through powerful positioning and crystal-clear messaging.</p>
                            <div className="btn">
                                <a href="#" className="btn-book">Book a free Clarity Call now</a>
                                <a href="#" className="btn-learn">Or learn how I do it!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section1-right">
                            <img className="img-section1" src="images/section-1.png" alt="img section 1" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section1;