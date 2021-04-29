import React, { Component } from 'react';

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
            <li
                className={this.state.complete ? 'striked' : 'unstriked'}  >
                <span style={{ color: 'red', background: 'green' }}
                    onClick={this.toggleState}>  X  </span>
                {this.props.text}
                <span style={{ color: 'blue', background: 'yellow' }}
                    onClick={() => this.props.removeItem(this.props.id)}>  -   </span>

            </li>
        );
    }
}

export default Item;