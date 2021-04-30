import React, { Component } from 'react';
import Item from '../../containers/Item/Item'

import classes from './ItemList.module.css';

class ItemList extends Component {

    render() {
        console.log(this.props.list);
        let result = null;
        if (!this.props.list.length) {
            result = <div className={classes.Message}> Add more items here:</div>
        } else {
            result = (
                <div className={classes.ItemList}>
                    <ol style={{ overflow: 'hidden' }}>
                        {this.props.list.map((todoItem, index) => {
                            return <Item text={todoItem} id={index} removeItem={this.props.onItemRemove} />
                        })}
                    </ol>
                </div>
            )
        }
        return (
            result
        );
    }
}
export default ItemList;


