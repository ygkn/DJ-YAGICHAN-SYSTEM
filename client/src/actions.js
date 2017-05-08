import { createAction } from 'redux-actions';

export const REQUEST_LOGIN       = "REQUEST_LOGIN";
export const SUCCESS_LOGIN       = "SUCCESS_LOGIN";
export const FAILURE_LOGIN       = "FAILURE_LOGIN";
export const REQUEST_SUBMIT_SONG = "REQUEST_SUBMIT_SONG";
export const SUCCESS_SUBMIT_SONG = "SUCCESS_SUBMIT_SONG";
export const FAILURE_SUBMIT_SONG = "FAILURE_SUBMIT_SONG";
export const INPUT_QUERY         = "INPUT_QUERY";
export const REQUEST_SEARCH      = "REQUEST_SEARCH";
export const SUCCESS_SEARCH      = "SUCCESS_SEARCH";
export const FAILURE_SEARCH      = "FAILURE_SEARCH";
export const ADDED_SONG          = "ADDED_SONG";

export const RequestLogin      = createAction(REQUEST_LOGIN);
export const SuccessLogin      = createAction(SUCCESS_LOGIN);
export const FailureLogin      = createAction(FAILURE_LOGIN);
export const RequestSubmitSong = createAction(REQUEST_SUBMIT_SONG);
export const SuccessSubmitSong = createAction(SUCCESS_SUBMIT_SONG);
export const FailureSubmitSong = createAction(FAILURE_SUBMIT_SONG);
export const InputQuery        = createAction(INPUT_QUERY);
export const RequestSearch     = createAction(REQUEST_SEARCH);
export const SuccessSearch     = createAction(SUCCESS_SEARCH);
export const FailureSearch     = createAction(FAILURE_SEARCH);
export const AddedSong         = createAction(ADDED_SONG);
