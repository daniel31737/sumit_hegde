import React, { Component } from 'react';

class Section2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section2-left">
                            <img className="img-section2" src="images/section-2.png" alt="img section 2" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section2-right">
                            <h2>Does your website suck at acquiring customers?</h2>
                            <p>Are you constantly cooking up new acquisition strategies but failing to see the results? There's probably a tonne of pressure on you to get more customers.</p>
                            <p>But design is hard. Finding the right customers is hard. You're giving your all.</p>
                            <p>And yet, customers don’t convert.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section2;