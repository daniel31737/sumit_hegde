import React, { Component } from 'react';
import Title6 from './Children/Title_6';
import BackgroundSection from './Children/BackgroundSection';
import ContextSection6 from './Children/ContextSection_6';

class Section6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            contexts : [
                {
                    id     : "1",
                    src    : "images/svg/crown.svg",
                    alt    : "crown-icon",
                    content: "Positioning to eliminate competition and increase perceived value of the product"
                },
                {
                    id     : "2",
                    src    : "images/svg/stele.svg",
                    alt    : "target-icon",
                    content: "Crystal-clear messaging that connects with prospects and turns them into your customers"
                }
            ],
            count : 0
        }
    }

    onSetState = () => {
        let tempContext = this.state.contexts;
        this.state.flag ? tempContext[0].src = "images/svg/stele.svg" : tempContext[0].src = "images/svg/crown.svg"
        
        this.setState({
            flag: !this.state.flag,
            contexs: [...tempContext]
        })
    }
    render() {
        var infoContext = this.state.contexts.map((value, index) => {
            return  <ContextSection6
                            key = { value.id }
                            src = { value.src }
                            alt = { value.alt }>
                        { value.content }
                    </ContextSection6>
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Title6 />
                        { infoContext }
                        <div className="btnState">
                            <button type="button" className="btnSetState" onClick={ this.onSetState }>Set State</button>
                        </div>
                    </div>
                </div>
                <BackgroundSection />
            </div>
        );
    }
}

export default Section6;