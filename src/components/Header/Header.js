import React, { Component } from 'react';
import NarbarLeft from './Children/NarbarLeft';
import NarbarRight from './Children/NarbarRight';


class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <NarbarLeft />
                </div>
                <div className="col-md-6">  
                    <NarbarRight />
                </div>
            </div>
        )
    }
}

export default Header;