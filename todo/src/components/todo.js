import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions/actions';
import "./components.css"

const ToDo = (props) => {
    console.log(props)
    return (
        <div className="item-container">
            <div className="item-text" onClick={props.onClick}
                style={{
                    textDecoration: props.completed ? 'line-through' : 'none'
                }}
            >
                <h3> - {props.value}</h3>
            </div>
            <div className="item-delete-btn" onClick={props.delete}>Delete me</div>
        </div>
    )
}


export default connect(() => ({}), { toggle })(ToDo);