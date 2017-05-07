import { createAction } from 'redux-actions';

export const REQUEST_GET_SONG    = "REQUEST_GET_SONG";
export const SUCCESS_GET_SONG    = "SUCCESS_GET_SAAONG";
export const FAILURE_GET_SONG    = "FAILURE_GET_SAAONG";
export const REQUEST_SUBMIT_SONG = "REQUEST_SUBMIT_SONG";
export const SUCCESS_SUBMIT_SONG = "SUCCESS_SUBMIT_SONG";
export const FAILURE_SUBMIT_SONG = "FAILURE_SUBMIT_SONG";
export const INPUT_QUERY         = "INPUT_QUERY";
export const REQUEST_SEARCH      = "REQUEST_SEARCH";
export const SUCCESS_SEARCH      = "SUCCESS_SEARCH";
export const FAILURE_SEARCH      = "FAILURE_SEARCH";
export const POSTED_SONG         = "POSTED_SONG";

export const RequestGetSong    = createAction(REQUESTGETSONG);
export const SuccessGetSong    = createAction(SUCCESSGETSAAONG);
export const FailureGetSong    = createAction(FAILUREGETSAAONG);
export const RequestSubmitSong = createAction(REQUESTSUBMITSONG);
export const SuccessSubmitSong = createAction(SUCCESSSUBMITSONG);
export const FailureSubmitSong = createAction(FAILURESUBMITSONG);
export const InputQuery        = createAction(INPUTQUERY);
export const RequestSearch     = createAction(REQUESTSEARCH);
export const SuccessSearch     = createAction(SUCCESSSEARCH);
export const FailureSearch     = createAction(FAILURESEARCH);
export const PostedSong        = createAction(POSTEDSONG);
