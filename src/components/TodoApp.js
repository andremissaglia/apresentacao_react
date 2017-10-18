import React from 'react';
import { connect } from 'react-redux'
import AddTodoComponent from './AddTodoComponent';
import TodoListComponent from './TodoListComponent';
import {addTodo, removeTodo} from '../actions';
class TodoAppComponent extends React.Component {

    render() {
        return (
            <div>
                <AddTodoComponent onAdd={this.props.onAddTodo}/>
                <TodoListComponent onClick={this.props.onTodoClick} items={this.props.todos} />
            </div>
        )
    }    
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: text => {
            dispatch(addTodo(text))
        },
        onTodoClick: id => {
            dispatch(removeTodo(id))
        }
    }
}

const TodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAppComponent)

export default TodoApp;