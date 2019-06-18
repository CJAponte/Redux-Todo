import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';
import './components.css'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    inputHandler = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        })
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.submitHandler} >
                <input className="form-input" type='text' placeholder='Your item to do' value={this.state.item} onChange={this.inputHandler}></input>
                <button className="form-btn" type='submit'>+</button>
            </form>
        )
    }
}

export default connect(() => ({}), { addItem })(Form);