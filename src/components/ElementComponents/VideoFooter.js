import React, { Component } from 'react'
import styled from 'styled-components'
import SelectRate from './RateMovie'
import { Link } from 'react-router-dom'
import { getMovieDetails } from '../../redux/mainActions'
import { connect } from 'react-redux'

//Styled components were part of the test so I decided to make one class with it
//however personnally I prefer css.

//Localy styled div.
const VideoFooterDiv = styled.div`
background: black;
color:goldenrod;
width:100%;
text-align:left;
margin: 10px;
`;

//Localy styled span.
const VideoFooterSpan = styled.span`
width:25px;
text-align:left;
margin: 10px;
`;

//I use class here because I want to change the backgroundColor and display attribute of certain elemnts localy. 
export class VideoFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "",
            display: ""
        }
    }

    //The changeColorToRed function sets the backgroundColor of the footer red on onMuoseOver event.
    changeColorToRed = (e) => {
        this.setState({
            backgroundColor: "red",
        })
    }

    //The changeColorToBlack function sets the backgroundColor of the footer black on onMuoseOver event.
    changeColorToBlack = (e) => {
        this.setState({
            backgroundColor: "black"
        })
    }

    render() {
        return (

            //I use Link to make individual url to choosen video.
            <Link to={`/MovieDetail/${this.props.id}`}>

                {/* This styled div contains the Name, Rate, and Year attributes of the video. */}
                <VideoFooterDiv style={{ backgroundColor: this.state.backgroundColor }}

                    //Change footer color to red.
                    onMouseOver={this.changeColorToRed}

                    //Change footer color to black.
                    onMouseOut={this.changeColorToBlack}

                    //Call getMovieDetails function from Redux.
                    onClick={() => this.props.getMovieDetails(this.props.id)}>

                    {/* Display name in styled span. */}
                    <VideoFooterSpan>Name: {this.props.name}</VideoFooterSpan>
                    <hr></hr>

                    {/* Display Rate of the movie and give possibility to Rate the movie in a select tag */}
                    <SelectRate id={this.props.id}></SelectRate>
                    <VideoFooterSpan>Rate: {this.props.rate.toFixed(2)} </VideoFooterSpan>
                    <hr></hr>

                    {/* Display Year in styled span. */}
                    <VideoFooterSpan>Year: {this.props.year}</VideoFooterSpan>

                </VideoFooterDiv>

            </Link>
        )
    }
}

//Connect getMovieDetails with Redux store.
const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: (id) => dispatch(getMovieDetails(id))
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(VideoFooter)


