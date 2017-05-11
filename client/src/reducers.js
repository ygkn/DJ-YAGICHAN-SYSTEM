import { handleActions } from 'redux-actions';
import { requestLogin, successLogin, failureLogin,
  requestSubmitSong, successSubmitSong, failureSubmitSong,
  inputQuery, requestSearch, successSearch, failureSearch,
  addedSong, playedSong } from "./actions";

const inital = {
  user: {
    lastPosted: 0,
    submitstate: "unstarted"
  },
  videoList: [],
  search: {input: ""}
};

export default {
  user: handleActions({
    [successLogin](state, action){
      const {lastPosted} = action.payload;
      return {...state, lastPosted};
    },
    [requestSubmitSong](state){
      return {...state, submitstate: "pending"};
    },
    [successSubmitSong](state){
      return {...state, submitstate: "completed"};
    },
    [failureSubmitSong](state){
      return {...state, submitstate: "error"};
    }
  }, inital.user),
  videoList: handleActions({
    [successLogin](state, action) {
      return action.payload.videoList;
    }
    [addedSong](state, action){
      return [...state, action.payload];
    }
    [playedSong](state, action){
      const after = [...state];
      after[action.payload].playing = true;
    }
  }, inital.videoList),
  search: handleActions({
    [inputQuery](state, action){
      return {...state, input: action.payload};
    }
  }, inital.search)
};


