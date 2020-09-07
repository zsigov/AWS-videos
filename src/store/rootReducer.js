import { combineReducers } from 'redux'
import mainReducer from '../redux/mainReducer'

//In real scenario I might have more than one reducers.
//For exapmple if I have an API with data then I would build another reducer 
//to handel communication between the site and the API
//So in this scenario it is not necessary to unse combineReducers but in the next version it may be usefull.
const rootReducer = combineReducers({
    videos: mainReducer
    //Here I can add more reducers like:
    //fetchVideos:fetchReducer
})

export default rootReducer