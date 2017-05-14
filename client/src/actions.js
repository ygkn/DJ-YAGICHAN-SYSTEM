import { createActions } from 'redux-actions';

export const actions = createActions(
  "REQUEST_LOGIN",
  "SUCCESS_LOGIN",
  "FAILURE_LOGIN",
  "REQUEST_SUBMIT_SONG",
  "SUCCESS_SUBMIT_SONG",
  "FAILURE_SUBMIT_SONG",
  "INPUT_QUERY",
  "REQUEST_SEARCH",
  "SUCCESS_SEARCH",
  "FAILURE_SEARCH",
  "ADDED_SONG",
  "PLAYED_SONG"
);
