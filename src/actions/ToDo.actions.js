import { ADD_TODO } from '../constants/ActionTypes';

let nextToDoId = 0;

export function addtodo(text) {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    text
  };
}
