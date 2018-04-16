// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER, FILE_LOADED } from '../actions/counter';
import merge from 'lodash/merge';

export type counterStateType = {
  // +counter: number
  // +counter: {+counter: number}
  +counter: {+counter: number}
};

type actionType = {
  +type: string,
  +data?: {}
};

// export default function counter(state: number = 0, action: actionType) {
export default function counter(state: {} = { mycounter: 0, data: null }, action: actionType) {
  // QUESTION: Is this already the best way to update state?
  console.log('action:', action);  // DELME
  Object.freeze(state);
  let newState = merge({}, state);
  // TODO Find/design the suitable state to represent the loaded JSON
  // TODO: Before that, I must figure out what type means here. Otherwise, I don't have neough knowledge to proceed.
  switch (action.type) {
    case INCREMENT_COUNTER:
      // return state + 1;
      newState.mycounter++;
      return newState;
    case DECREMENT_COUNTER:
      // return state - 1;
      newState.mycounter--;
      return newState;
    case FILE_LOADED:
      newState.data = JSON.stringify(action.data);
      return newState;
    default:
      return newState;
  }
}
