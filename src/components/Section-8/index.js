import React, { Component } from 'react';
import Title8 from './Children/Title_8';
import ContentBlock from './Children/ContentBlock';

class Section8 extends Component {
    render() {
        var contentArray = [
            {
                id        : '1',
                src       : 'images/svg/target-icon.svg',
                alt       : 'target icon',
                content   : 'Identify the cream-of-the-crop customers',
                description: 'For your SaaS product, who will not only subscribe to your product and use it consistently, but also spread the gospel around.'
            },
            {
                id        : '2',
                src       : 'images/svg/information-exchange.svg',
                alt       : 'information exchange',
                content   : "Speak your customer's language",
                description: 'Use their own words to beat any objections they might have about your product.'
            },
            {
                id        : '3',
                src       : 'images/svg/icon-anonymous-1.svg',
                alt       : 'anonymous icon',
                content   : 'Prevent 80% of visitors from abandoning your website',
                description: "By creating on-point landing pages that actually tackle the customer's problems and requirements."
            },
            {
                id        : '4',
                src       : 'images/svg/dollar-icon.svg',
                alt       : 'dollar icon',
                content   : 'Create a proven system to do the selling for you',
                description: 'And apply it across different audiences and pain-points for predictably acquiring customers!'
            },
            {
                id        : '5',
                src       : 'images/svg/logo-section-4.svg',
                alt       : 'static icon',
                content   : 'Extract key insights about your customers',
                description: "To understand precisely what makes them buy and what's stopping them from taking action."
            },
            {
                id        : '6',
                src       : 'images/svg/statistical.svg',
                alt       : 'statistical icon',
                content   : 'Convert more visitors into customers',
                description: "By creating a targeted website that speaks to your best customers, communicates the product effectively and answers all objections."
            },
            {
                id        : '7',
                src       : 'images/svg/cup-icon.svg',
                alt       : 'cup icon',
                content   : 'Make your brand stand out',
                description: "Through positioning that eliminates competition and messaging that helps you cut through the noise."
            }
        ]
        var indexContentMid   = [0,1,2,3];
        var indexContentRight = [4,5,6];

        var infoContentMid = indexContentMid.map(index => {
            return  <ContentBlock
                            key = { index }
                            src = { contentArray[index].src }
                            alt = { contentArray[index].alt }
                            description = { contentArray[index].description }>
                        { contentArray[index].content }
                    </ContentBlock>
        })

        var infoContentRight = indexContentRight.map(index => {
            return  <ContentBlock
                            key = { index }
                            src = { contentArray[index].src }
                            alt = { contentArray[index].alt }
                            description = { contentArray[index].description }>
                        { contentArray[index].content }
                    </ContentBlock>
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Title8 />
                        </div>
                        <div className="col-md-4">
                            { infoContentMid }
                        </div>
                        <div className="col-md-4" id="col-mid-3">
                            { infoContentRight }
                        </div>
                    </div>
                </div>
                <div className="background-section">
                    <img src="images/backgound-1.png" alt="background-section-6" />
                </div>
            </div>
        )
    }
}

export default Section8;