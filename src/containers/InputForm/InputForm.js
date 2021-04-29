import React, { Component } from 'react';

class InputForm extends Component {
    state = {
        itemText: ''
    }

    inputChangedHandler = (event) => {
        this.setState({ itemText: event.target.value });
    }

    dataSubmitHandler = (event) => {
        event.preventDefault();
        this.props.itemAdded(this.state.itemText);
        this.setState({ itemText: '' });
    }

    render() {
        return (

            <form>
                <input
                    type="text"
                    placeholder="Whats next"
                    onChange={this.inputChangedHandler}
                    value={this.state.itemText} />
                <button
                    onClick={this.dataSubmitHandler}>Add</button>
            </form>

        );
    }
}

export default InputForm;