import React, { Component } from 'react';

class Section6 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h2>I build websites that convert visitors using two research-driven methods:</h2>
                        <div className="col-md-6">
                            <p><img src="images/svg/crown.svg" alt="crown-icon" /></p>
                            <div className="content-section-6">Positioning to eliminate competition and increase perceived value of the product</div>
                        </div>
                        <div className="col-md-6">
                            <p><img src="images/svg/stele.svg" alt="target-icon" /></p>
                            <div className="content-section-6">Crystal-clear messaging that connects with prospects and turns them into your customers</div>
                        </div>
                        <div className="btn">
                            <a href="#" className="btn-book">Book a free Clarity Call now</a>
                        </div>
                    </div>
                </div>
                <div className="background-section">
                    <img src="images/backgound-1.png" alt="background-section-6" />
                </div>
            </div>
        );
    }
}

export default Section6;