import React from 'react'
import { connect } from 'react-redux'

//Contains all the details abut a choosen movie what we can get from an API.
//In this case I put some chosen attribute and some that migt be available in real scenarios.
function MovieDetails(props) {
    return (
        <div className="divVideoDetails">
        <br></br>

        {/* Display url
        Since there is only one video displayed I can refer it as videos[0] of the array.  */}
        <span><strong>URL:</strong></span>
        <span> {props.rootState.videos[0].url }</span>
        <hr></hr>

        {/* Display Number of rates 
        Since there is only one video displayed I can refer it as videos[0] of the array.*/}
        <span><strong>Number of rates:</strong></span> 
        <span> {props.rootState.videos[0].numberOfRates }</span>
        <hr></hr>

        {/* Display Categories.
        Since there is only one video displayed I can refer it as videos[0] of the array,
        but I still have to map through the categories array to display all of them.*/}
        <span><strong>Category:</strong></span> 
        <span> {props.rootState.videos[0].category.map(category=> category +', ' ) }</span>
        <hr></hr>

        {/* In real scenarios we would display Author */}
        <span><strong>Author:</strong></span>
        <span> "Get Author from API"</span>
        <hr></hr>

        {/* In real scenarios we would display Length */}
        <span><strong>Length:</strong></span> 
        <span> "Get length from API"</span>
        <hr></hr>

        {/* In real scenarios we would display Description */}
        <span><strong>Description:</strong></span> 
        <span><p> "Get Description from API that describes what is this video about"</p></span>
        </div>
    )
}

//I use redux state to display the 
const mapStateToProps = state => {
    return {
        rootState: state.videos
    }
}

//Connect Redux store to this page. It automatically sends null instead of mapDispatchToProps.
export default connect(mapStateToProps)(MovieDetails)

