import React, { Component } from 'react';

import '../../Fonts/Valorant.ttf'
import classes from './Quote.module.css';

class Quote extends Component {


    render() {

        let alignmentClass = ''
        if (this.props.left) {
            alignmentClass = classes.LeftQuote
        } else {
            alignmentClass = classes.RightQuote
        }
        return (

            <div className={alignmentClass}>
                <div className={classes.Just}>JUST</div>
                <div className={classes.Do}>DO</div>
                <div className={classes.It}>IT</div>
            </div>
        );
    }
}

export default Quote;