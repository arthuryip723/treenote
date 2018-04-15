// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

export default function counter(state: number = 0, action: actionType) {
  console.log('action:', action);  // DELME
  // TODO Find/design the suitable state to represent the loaded JSON
  // THOUGHT: Before that, I must figure out what type means here. Otherwise, I don't have neough knowledge to proceed.
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
