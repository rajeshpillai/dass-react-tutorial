import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoDB = [
    {id: 1, title: "Learning React", completed: false},
    {id: 2, title: "Learning Node", completed: true},
    {id: 3, title: "Learning Ruby", completed: false},
];

class TodoApp extends React.Component  {
    constructor() {
        super();
        this.state = {
            todos: TodoDB,
            todo: {
                id: undefined,
                title: "",
                completed: false
            }
        }
    }

    onDelete = (todoId) => {
        let todos = this.state.todos.filter((t) => {
            return t.id !== todoId;
        });
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div>
                <h2>My awesome todo app</h2>
                <TodoForm />
                <TodoList todos={this.state.todos} 
                    onDelete = {this.onDelete}
                />
            </div>
        )
    }
}

export default TodoApp;