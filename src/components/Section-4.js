import React, { Component } from 'react';

class Section4 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>You're trying a lot of things,<br /><b>but aren't getting the results you want</b></h2>
                    <div className="div-layout-grid">
                        <div className="col-md-4">
                            <p><img src="images/svg/hinh1.svg" alt="" /></p>
                            <div className="content-layout">Rebranding your product, again.</div>
                        </div>
                        <div className="col-md-4">
                            <p><img src="images/svg/icon-anonymous-2.svg" alt="" /></p>
                            <div className="content-layout">Hiring a designer to redesign your website.</div>
                        </div>
                        <div className="col-md-4">
                            <p><img src="images/svg/icon-anonymous-3.svg" alt="" /></p>
                            <div className="content-layout">A/b testing your landing pages.</div>
                        </div>
                        <div className="col-md-4">
                            <p><img src="images/svg/icon-anonymous-4.svg" alt="" /></p>
                            <div className="content-layout">Interviewing your customers.</div>
                        </div>
                        <div className="col-md-4">
                            <p><img src="images/svg/loudspeaker.svg" alt="" /></p>
                            <div className="content-layout">Running ads to your landing page.</div>
                        </div>
                        <div className="col-md-4">
                            <p><img src="images/svg/write-icon.svg" alt="" /></p>
                            <div className="content-layout">Hiring a copywriter to redo your copy.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4;