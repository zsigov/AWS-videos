import React from 'react'
import { connect } from 'react-redux'
import { backToLandingPage } from '../../redux/mainActions'
import { Link } from 'react-router-dom'

//This button navigates us back to the original landing page 
//thrugh a LINK and an action to recall initial Redux store.
const BtnAwsomeMovies = (props) => {
    return (
        <div>

            {/* props.backToLandingPage action resets the Redux store. */}
            <Link to='/'>
                <button className="btnAwsmovies"
                    onClick={props.backToLandingPage} >
                    AWSMOVIES
                </button>
            </Link>

        </div>
    )
}

// I use Redux action to dispach backToLandingPage function.
const mapDispatchToProps = dispatch => {
    return {
        backToLandingPage: () => dispatch(backToLandingPage())
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(BtnAwsomeMovies)
