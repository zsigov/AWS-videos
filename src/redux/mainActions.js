import { SEARCH_BY_NAME } from './mainTypes'
import { SEARCH_BY_YEAR } from './mainTypes'
import { SEARCH_BY_RATE } from './mainTypes'
import { SEARCH_BY_CATEGORY } from './mainTypes'
import { BACK_TO_LANDING_PAGE } from './mainTypes'
import { RATE_MOVIE } from './mainTypes'
import { GET_MOVIE_DETAILS } from './mainTypes'

//This is my main Action container. 
//It defines the type and the payload for every action to pass them to the mnainReducer.

export const searchByName = name => {
    return {
        type: SEARCH_BY_NAME,
        payload: name
    }
}

export const searchByYear = year => {
    return {
        type: SEARCH_BY_YEAR,
        payload: year
    }
}

export const searchByRate = rate => {
    return {
        type: SEARCH_BY_RATE,
        payload: rate
    }
}

export const searchByCategory = category => {
    return {
        type: SEARCH_BY_CATEGORY,
        payload: category
    }
}

export const backToLandingPage = () => {
    return {
        type: BACK_TO_LANDING_PAGE
    }
}

export const rateMovie = (id, rate) => {
    return {
        type: RATE_MOVIE,
        payload: {
            id,
            rate
        }
    }
}

export const getMovieDetails = (id) => {
    return {
        type: GET_MOVIE_DETAILS,
        payload: id
    }
}