import React, { Component } from 'react';

class Section10 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <h2>Need time to think it over?</h2>
                    </div>
                    <div>
                        <p>Want to learn my exact process for free and try it yourself? This email course gives you all the tools to boost your conversion rate!</p>
                    </div>
                    <div className="form-submit">
                        <form>
                            <input className="txtSubmit" id="txtFirstName" type="text" placeholder="First Name" />
                            <input className="txtSubmit" id="txtEmail" type="text" placeholder="Email" />
                            <input className="btnSubmit" type="button" defaultValue="Get Lesson #1 now" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section10;