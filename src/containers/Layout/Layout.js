import React, { Component } from 'react';
import InputForm from '../InputForm/InputForm'
import ItemList from '../../components/ItemList/ItemList'
import Quote from '../../components/Quote/Quote'

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        itemList: []
    }

    itemAddHandler = (val) => {
        const updatedList = this.state.itemList.concat(val)
        this.setState({ itemList: updatedList });
    }

    itemDeleteHandler = (index) => {
        const updatedList = [...this.state.itemList]
        updatedList.splice(index, 1)
        this.setState({ itemList: updatedList });

    }

    render() {
        return (
            <React.Fragment>
                <Quote left />
                <div className={classes.Layout}>

                    <div className={classes.Heading}>TODO LIST</div>
                    <div>
                        <ItemList list={this.state.itemList} onItemRemove={this.itemDeleteHandler} />
                    </div>
                    <InputForm itemAdded={this.itemAddHandler} />
                </div>
                <Quote right />
            </React.Fragment>
        );
    }
}

export default Layout;