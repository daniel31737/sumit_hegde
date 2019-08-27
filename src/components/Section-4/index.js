import React, { Component } from 'react';
import Title4 from './Children/Title_4';
import GridLayout from './Children/GridLayout';

class Section4 extends Component {
    render() {
        var dataLayoutGrid = [
            {
                id     : '1',
                src    : 'images/svg/hinh1.svg',
                alt    : 'hinh 1',
                content: 'Rebranding your product, again.'
            },
            {
                id: '2',
                src: 'images/svg/icon-anonymous-2.svg',
                alt: 'anonymous 2',
                content: 'Hiring a designer to redesign your website.'
            },
            {
                id: '3',
                src: 'images/svg/icon-anonymous-3.svg',
                alt: 'anonymous 3',
                content: 'A/b testing your landing pages.'
            },
            {
                id: '4',
                src: 'images/svg/icon-anonymous-4.svg',
                alt: 'anonymous 4',
                content: 'Interviewing your customers.'
            },
            {
                id: '5',
                src: 'images/svg/loudspeaker.svg',
                alt: 'loudspeaker',
                content: 'Running ads to your landing page.'
            },
            {
                id: '6',
                src: 'images/svg/write-icon.svg',
                alt: 'write icon',
                content: 'Hiring a copywriter to redo your copy.'
            }
        ]

        var layoutGrid = dataLayoutGrid.map((value, index) => {
            return  <GridLayout 
                        key = { value.id }
                        src = { value.src }
                        alt = { value.alt }>
                        { value.content }
                    </GridLayout>
        })
        return (
            <div className="container">
                <div className="row">
                    <Title4 />
                    <div className="div-layout-grid">
                        { layoutGrid }
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4;