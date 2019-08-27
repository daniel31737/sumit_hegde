import React, { Component } from 'react';
import LogoCompany from './Children/LogoCompany';

class Logos extends Component {
    render() {
        var logos = [
            {
                id : 'img-spocket',
                src: 'images/spocket.png',
                alt: 'spocket'
            },
            {
                id : 'img-libertypool',
                src: 'images/libertypool.png',
                alt: 'libertypool'
            },
            {
                id : 'img-techstars',
                src: 'images/techstars.png',
                alt: 'techstars'
            },
            {
                id : 'img-anonymous',
                src: 'images/anonymous.png',
                alt: 'anonymous'
            },
            {
                id : 'img-coinklap',
                src: 'images/coinklap.png',
                alt: 'coinklap'
            },
            {
                id : 'img-mindflix',
                src: 'images/mindflix.png',
                alt: 'mindflix'
            }
        ]

        var infoLogo = logos.map((value, index) => {
            return <LogoCompany 
                        key = { index }
                        id  = { value.id }
                        src = { value.src }
                        alt = { value.alt }
                    />
        })
        return (
            <div className="div-block">
                <div className="text-block">
                    Trusted by high growth companies
                </div>
                <div className="img-block">
                    { infoLogo }
                </div>
            </div>
        )
    }
}

export default Logos;