import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Components {
    textRef = createRef();

    onSubmit(event) => {
const { addTask } = this.props;

        event.preventDefault();

        addTask(this.textRef.current.value);
        this.textRef.current.value = '';

        console.log(this.textRef);
    };
    static PropTypes = {
        addTask: PropTypes.func.isRequired
    };
    render() {
        return(
            <form className="add-task" onSubmit={this.onSubmit}>
            <input className="add-task_field" type="text" ref={this.textRef}/>
            <input className="add-task_button" type="submit" value="Добавить" />
            </form>
        );
        
    }
    
}

export default AddTask;