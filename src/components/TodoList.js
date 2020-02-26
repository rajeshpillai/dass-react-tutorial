import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.todos);
    }
    
    onDeleteItem =(todoId)=> {
       if (this.props.onDelete) {
           this.props.onDelete(todoId);
       }
    }

    render() {
        return (
            <React.Fragment>
                <ul class="todos">
                    { this.props.todos.map((todo) => {
                        return (
                        <li>{todo.title}
                            <button onClick={()=>{this.onDeleteItem(todo.id)}}>X</button>
                        </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoList;