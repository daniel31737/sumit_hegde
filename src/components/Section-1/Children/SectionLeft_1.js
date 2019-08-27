import React, { Component } from 'react'
import ButtonBook from './ButtonBook';

export default class SectionLeft1 extends Component {
    render() {
        return (
            <div className="section1-left">
                <h1>Your SaaS website is stopping you from doubling your MRR</h1>
                <h4>I can help you change that.</h4>
                <p>I help SaaS bussinesses convert visitors into customer through powerful positioning and crystal-clear messaging.</p>
                <div className="btn">
                    <ButtonBook />
                    <a href="#" className="btn-learn">Or learn how I do it!</a>
                </div>
            </div>
        )
    }
}
