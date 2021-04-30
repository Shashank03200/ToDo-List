import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

import classes from './Item.module.css';

class Item extends Component {
    state = {
        complete: false
    }

    toggleState = () => {
        this.setState(prevState => ({
            complete: !prevState.complete
        }));
    }

    render() {



        return (
            <li className={classes.Item}>
                {/* <span style={{ color: 'red', background: 'green' }}
                    onClick={this.toggleState}>  X  </span> */}
                <Checkbox checked={this.state.complete} onChange={this.toggleState} color='primary' />
                <span className={this.state.complete ? classes.Striked : null} >{this.props.text}</span>
                <span className={classes.TrashIcon}
                    onClick={() => this.props.removeItem(this.props.id)}>
                    <i class="fas fa-trash"></i>
                </span>

            </li >
        );
    }
}

export default Item;