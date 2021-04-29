import React, { Component } from 'react';
import InputForm from '../InputForm/InputForm'
import ItemList from '../../components/ItemList/ItemList'

class Layout extends Component {
    state = {
        itemList: []
    }

    itemAddHandler = (val) => {
        const updatedList = this.state.itemList.concat(val)
        this.setState({ itemList: updatedList });
        console.log(updatedList);
    }

    itemDeleteHandler = (index) => {
        const updatedList = [...this.state.itemList]
        updatedList.splice(index, 1)
        console.log(index);
        console.log(updatedList);
        this.setState({ itemList: updatedList });

    }

    render() {
        return (
            <div>
                <div>
                    <ItemList list={this.state.itemList} onItemRemove={this.itemDeleteHandler} />
                </div>
                <InputForm itemAdded={this.itemAddHandler} />
            </div>
        );
    }
}

export default Layout;