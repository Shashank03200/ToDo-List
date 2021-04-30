import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import React, { Component } from 'react';

import classes from './InputForm.module.css';

class InputForm extends Component {
    state = {
        itemText: '',
        btnDisabled: true
    }

    checkValidity = (itemText) => {
        console.log(itemText);
        console.log(this.state.btnDisabled);
        if (itemText == '') {
            this.setState({ btnDisabled: true });
        } else {
            this.setState({ btnDisabled: false });
        }
    }

    inputChangedHandler = (event) => {
        this.setState({ itemText: event.target.value });
        this.checkValidity(event.target.value);
    }

    dataSubmitHandler = (event) => {
        event.preventDefault();
        this.props.itemAdded(this.state.itemText);
        this.setState({ itemText: '', btnDisabled: true });
    }

    render() {

        const btnVisiblity = this.state.btnDisabled ? 'none' : 'inline'
        let inputClasses = [classes.Input];
        let btnClasses = [classes.AddButton];
        if (this.state.itemText) {
            inputClasses.push(classes.InputAnimated);
            btnClasses.push(classes.ButtonAnimated);
        }

        return (


            <form onSubmit={this.dataSubmitHandler}>
                <div className={classes.InputForm}>
                    <input
                        className={inputClasses.join(' ')}
                        type="text"
                        placeholder="Whats next"
                        onChange={this.inputChangedHandler}
                        value={this.state.itemText} />


                    <button className={btnClasses.join(' ')} style={{
                        display: btnVisiblity
                    }}
                        onClick={this.dataSubmitHandler}
                        disabled={this.state.btnDisabled}>
                        < AddCircleRoundedIcon style={{
                            fontSize: '50px'
                        }}
                            className={classes.AddIcon}
                        />
                    </button>

                </div>

            </form>


        );
    }
}

export default InputForm;