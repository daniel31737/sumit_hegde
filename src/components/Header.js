import React, { Component } from 'react';
import { directive } from '@babel/types';
import NarbarLeft from './Header/Narbar_left';
import NarbarRight from './Header/Narbar_right';

class Header extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <NarbarLeft />
                    </div>
                    <div className="col-md-6">  
                        <NarbarRight />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;