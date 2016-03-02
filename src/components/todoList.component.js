import React, { Component, PropTypes } from 'react';
import Todo from './todo.component';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id} text={ todo.text } />
        )}
      </ul>
    )
  }
}
TodoList.propTypes = {
  todos: PropTypes.array
}
