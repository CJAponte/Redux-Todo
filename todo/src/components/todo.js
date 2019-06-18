import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions/actions';

const ToDo = (props) => {
    console.log(props)
    return (
        <div>
            <div onClick={props.onClick}
                style={{
                    textDecoration: props.completed ? 'line-through' : 'none'
                }}
            >
                <h3> - {props.value}</h3>
            </div>
            <div onClick={props.delete}>Delete me</div>
        </div>
    )
}


export default connect(() => ({}), { toggle })(ToDo);