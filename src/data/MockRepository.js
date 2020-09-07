
//This is a mock repository with Redux store actions and fetching data.
//I just copied and modified it from another work of mine to show how I connect API's.

// const redux = require('redux')
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

// const initialState = {
//     loading: false,
//     videos: [],
//     error: ''
// }

// const FETCH_GET_VIDEOS_REQUEST = 'FETCH_GET_VIDEOS_REQUEST'
// const FETCH_GET_VIDEOS_SUCCESS = 'FETCH_GET_VIDEOS_SUCCESS'
// const FETCH_GET_VIDEOS_FAILURE = 'FETCH_GET_VIDEOS_FAILURE'

// const fetchGetVideosRequest = () => {
//     return {
//         type: 'FETCH_GET_VIDEOS_REQUEST'
//     }
// }

// const fetchGetVideosSuccess = videos => {
//     return {
//         type: 'FETCH_GET_VIDEOS_SUCCESS',
//         payload: videos
//     }
// }

// const fetchGetVideosFailure = error => {
//     return {
//         type: 'FETCH_GET_VIDEOS_FAILURE',
//         payload: error
//     }
// }

// //We would call fetchGetVideos whenever we need a new list of videos from the API
// const fetchGetVideos = () => {
//     return function (dispatch) {
//         dispatch(fetchGetVideosRequest())
//         axios.get('https://Any API url what we call')
//             .then(response => {
//                 //response data the users
//                 const videos = response.data.map(video => video.id)
//                 dispatch(fetchGetVideosSuccess(videos))
//             })
//             .catch(error => {
//                 //response error
//                 dispatch(fetchGetVideosFailure(error.message))
//             })
//     }
// }

// const fetchReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_GET_VIDEOS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case FETCH_GET_VIDEOS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 videos: action.payload,
//                 error: ''
//             }

//         case FETCH_GET_VIDEOS_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 videos: [],
//                 error: action.payload
//             }

//     }
// }