import React, { Component } from 'react';
import Item from '../../containers/Item/Item'

class ItemList extends Component {

    render() {
        console.log(this.props.list);
        let result = null;
        if (!this.props.list.length) {
            result = <div div className="msg" > Add more items here:</div>
        } else {
            result = (
                <div>
                    <ul>
                        {this.props.list.map((todoItem, index) => {
                            return <Item text={todoItem} id={index} removeItem={this.props.onItemRemove} />
                        })}
                    </ul>
                </div>
            )
        }
        return (
            result
        );
    }
}
export default ItemList;


