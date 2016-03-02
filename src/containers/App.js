import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import AddToDo from '../components/AddToDo';
import TodoList from '../components/todolist.component'

import * as CounterActions from '../actions/CounterActions';
import * as TodoActions from '../actions/ToDo.actions';


class CounterApp extends Component {
  render() {
    const { counter, todos, dispatch } = this.props;
    return (
      <div>
        <Counter counter={counter}
                 {...bindActionCreators(CounterActions, dispatch)} />
        <AddToDo
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

function select(state) {
  return {
    counter: state.counter,
    todos: state.todos
  };
}

export default connect(select)(CounterApp);
