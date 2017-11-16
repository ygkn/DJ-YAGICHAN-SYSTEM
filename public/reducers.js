import { handleActions } from 'redux-actions';
import actions from "./actions";

const inital = {
 me: {
    id: "",
    name: "",
    authState: ""
  },
  room: {
    id: "",
    name: "",
    videos: [],
    owners: [],
    searchResults: [],
    queryVideo: "",
    submitstate: ""
  },
  user: {
    id: "",
    name: "",
    playList: []
  }
};

export default {
  me: handleActions({
    [actions.requestAuth](state) {
      return { ...state, authState: "pending" };
    },
    [actions.failureAuth](state, action) {
      return {...state, authState: action.payload}
    },
    [actions.successAuth](state, action) {
      const { id, name } = action.payload;
      return { id, name, authState: "completed" };
    }
  }),
  room: {
    [actions.successFetchRoomInfo](state, action) {
      return {...state, ...action.payload};
    },
    [actions.requestPostVideo](state) {
      return {
        ...state,
        submitting: {index: action.payload.index, state: "pending"}
      }
    },
    [actions.failurePostVideo](state) {
      return {
        ...state,
        submitting: {...state.submitting, state: "pending"}
      }
    },
    [actions.sucessPostVideo](state, action) {
      return {
        ...state,
        submitting: {...state.submitting, state: "completed"}
      }
    },
    [actions.sucessSearchVideo](state, action) {
      const { page, videos } = action.payload;
      const searchResults = [
        ...(page === 0 ? [] : state.searchResults),
        ...videos
      ];

      return {
        ...state,
         searchResults
      }
    },
    [actions.onPostedVideo](state, action) {
      const videos = [action.payload, ...state.videos];
      return {...state, videos};
    },
    [actions.onPlayedVideo](state, action) {
      const { index } = action.payload;
      const videos = [
        ...state.videos
          .slice(0, index)
          .map(value => ({...value, state: "unplayed"})),
        {...state.videos[index], state: "playing"},
        ...state.videos
          .slice(index)
          .map(value => ({...value, state: "played"}))
      ];
      return {...state, videos};
    },
    [actions.onDeletedVideo](state, action) {
      return {
        ...state,
        videos: state.videos.filter((value, index) =>
          index !== action.payload.index)}
    }
  },
  user: {
    [actions.successFetchUserInfo](state, action){
      return {...state, ...action.payload};
    }
  }
}
