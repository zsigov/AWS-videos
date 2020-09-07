import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from "react-player"
import VideoFooter from '../ElementComponents/VideoFooter'

//Contains the main content and initial load of the page.
//props contains Redux state through mapStateToProps method
function MainContainer(props) {

    return (
        <div className="mainContainer">

            {/* props.videosToRender contains videos array from Redux state
            I map ReactPlayer and a footer to every single video I display */}
            {props.videosToRender ? props.videosToRender.map(video => (
                <div className='react-player'
                    key={video.id}>

                    <ReactPlayer
                        className='react-player'
                        url={video.url}
                        width='100%'
                        height='100%'
                        // This is how we can change the thumbanail image from a video
                        // however with youtube videos they are already dispalyed with their own thumbnail image.
                        light=""
                    ></ReactPlayer>

                    {/* Contains a few information and possibility to rate the video.
                     It is clickable and it leads to MovieDetail page. 
                     I send individual video props from this level to display them on MovieDetail page.*/}
                    <VideoFooter id={video.id} rate={video.rate} name={video.name} year={video.year}></VideoFooter>

                {/* I give back an empty div if no videos found. */}
                </div>)) : <div></div>}
        </div>
    )
}

//mapStateToProps brings in the array of videos from Redux state.
const mapStateToProps = state => {
    return {
        videosToRender: state.videos.videos
    }
}

//I use connect to make this element able to reach Redux state.
export default connect(mapStateToProps)(MainContainer)