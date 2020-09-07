import videoData from '../data/maindata.js'
import categories from '../data/categories.js'
import { SEARCH_BY_NAME } from './mainTypes'
import { SEARCH_BY_YEAR } from './mainTypes'
import { SEARCH_BY_RATE } from './mainTypes'
import { SEARCH_BY_CATEGORY } from './mainTypes'
import { BACK_TO_LANDING_PAGE } from './mainTypes'
import { RATE_MOVIE } from './mainTypes'
import { GET_MOVIE_DETAILS } from './mainTypes'

//This is the mainReducer. I set and modifie the Redux state from here.

//I set initial videonumber as it was given in the test description.
const initvideonumber = 8;

//Set the initial state of the page.
const initialState = {

   //Set the intial displayed videos number. On this page 9 would be nicer but 8 was asked.
   initVideoNumber: initvideonumber,

   //I get my data from my videoData file however in real scearios we get them from APIs.
   //Then I sort them by rate and give back the first "initvideonumber as x" number of them.
   videos: SortVideosByRate(videoData, initvideonumber),

   //Represents the data which is the base of very search action. 
   searchWord: '',

   //I get my caetgories data from my Categories file however in real scearios we get them from the current API.
   categories: categories
}


//This function asks an array of videos with rate property. 
//It shorts them by rate and gives back the first "given number" of them in an array.
//"given number" is the resultNumberOfVideos parameter.
function SortVideosByRate(videoList, resultNumberOfVideos) {
   if (videoList !== null) {
      let SortedVideos = videoList.sort(function (videoa, videob) {
         return videob.rate - videoa.rate;
      })
      return SortedVideos.slice(0, resultNumberOfVideos);
   } else {
      return null
   }
}


//This function updates the rate of the given video.
//I have to filter the video by id then change it's properties.
function UpdateVideoRate(videoList, id, rate) {
   if (videoList !== null) {
      //Filter videolist by the given id.
      let filteredVideo = videoList.filter(video => video.id == id);

      //I can use filteredVideo[0] because I am sure that we have only one element in the list.
      let video = filteredVideo[0];
      let nrate = parseInt(rate);

      //Count the rate of video and change it in state. 
      //In real scenario we should also send a post or patch request to the API we use.
      video.rate = ((video.rate * video.numberOfRates) + nrate) / (video.numberOfRates + 1);

      //Change Number of rates as well.
      video.numberOfRates++;

      //Return the video as an array
      return [video]
   }
   else {

      //If videolist is empty I have to return an empty array in order to avoid site crash.
      return [];
   }
}

//The mainReducer is responsible for giving back the current state based on the user action.
const mainReducer = (state = initialState, action) => {

   switch (action.type) {

      case BACK_TO_LANDING_PAGE: return {
         ...state,
         searchWord: '',
         videos: SortVideosByRate(videoData, initvideonumber)
      }

      case SEARCH_BY_RATE: return {
         ...state,
         searchWord: action.payload,
         videos: action.payload === '' ?
            SortVideosByRate(videoData, initvideonumber) :
            videoData.filter(video => video.rate == action.payload)
      }

      case SEARCH_BY_NAME: return {
         ...state,
         searchWord: action.payload,
         videos: action.payload === '' ?
            SortVideosByRate(videoData, initvideonumber) :
            videoData.filter(video => video.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

      case SEARCH_BY_YEAR: return {
         ...state,
         searchWord: action.payload,
         videos: action.payload === '' ?
            SortVideosByRate(videoData, initvideonumber) :
            videoData.filter(video => video.year.includes(action.payload))
      }

      case SEARCH_BY_CATEGORY: return {
         ...state,
         searchWord: action.payload,
         videos: action.payload === 'CATEGORIES' ?
            SortVideosByRate(videoData, initvideonumber) :
            videoData.filter(video => video.category.includes(action.payload))
      }

      case RATE_MOVIE: return {
         ...state,
         videos: UpdateVideoRate(videoData, action.payload.id, action.payload.rate)
      }

      case GET_MOVIE_DETAILS: return {
         ...state,
         videos: videoData.filter(video => video.id == action.payload)
      }

      default: return state;
   }
}

export default mainReducer