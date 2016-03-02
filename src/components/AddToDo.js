import React, { Component, PropTypes } from 'react';

export default class AddToDo extends Component {
  render() {
    const { addtodo } = this.props;
    return (
      <div>
        <input ref={node => {
          this.input = node
        }} />
        <button onClick={ () => {
          addtodo(this.input.value);
          this.input.value = '';
        }}>Ajouter</button>
      </div>
    );
  }
}
AddToDo.propTypes = {
  addtodo: PropTypes.func.isRequired
};
