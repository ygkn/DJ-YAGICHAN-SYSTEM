import { createActions } from 'redux-actions';
import addPrefix from './helpers';

const requests = [
  "AUTH",
  "SEARCH_VIDEO",
  "POST_VIDEO",
  "PLAY_VIDEO",
  "DELETE_VIDEO",
  "ENTER_ROOM",
  "LEAVE_ROOM",
  ...addPrefix(
    ["USER_INFO", "ROOM_INFO"],
    ["FETCH_", "CREATE_", "UPDATE_"])
];

const events = [
  "POSTED_VIDEO",
  "PLAYED_VIDEO",
  "DELETED_VIDEO"
]

const actions = createActions(
  ...addPrefix(requests, ["REQUEST_", "SUCCESS_", "FAILURE_"]),
  ...addPrefix(events, ["ON_"])
);

export default actions;
