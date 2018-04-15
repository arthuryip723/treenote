// @flow
import type { counterStateType } from '../reducers/counter';
import * as FileUtil from '../utils/file_loader';

type actionType = {
  +type: string
};

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const FILE_LOADED = 'FILE_LOADED';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function fileLoaded(data) {
  return {
    type: FILE_LOADED,
    data: data
  }
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    // if (counter % 2 === 0) {
    //   return;
    // }
    if (counter.mycounter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

// QUESTION: Why does it need to return something here?
export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function loadFile(filename) {
  // FileUtil.loadFile(filename, (data) => {
  //   console.log('data:', data);

  // });
  // TODO: dispatch a FileLoad ation to update the state.
  return (dispatch: (action: actionType) => void) => {
    FileUtil.loadFile(filename, (data) => {
      console.log('data:', data);
      dispatch(fileLoaded(data));
    });
  }
}

// Build a util accepting the callback to dispatch a file_loaded event.
// The logic for loading the file should be in the util though.
// How to build a util? Refer to the previous example.
// Make a function in the util file. Export it.
// How to call the loadFile in index.js? See how other actions are called in counter.js.
