import { ADD_TODO } from '../constants/ActionTypes';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:

  }

}
export default function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      todo(undefined, action)
    ];
  default:
    return state;
  }
}
