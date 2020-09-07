import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchByRate } from '../../redux/mainActions'
import { Link } from 'react-router-dom'


//This input element is responsible for querying movies by rate like 4.5.
//Result will give back only exact matches.
function SearchByRate(props) {

    //I use React useState hook to set rate state.
    const [rate, setRate] = useState('')

    return (

        //I use Link to go back to Landing page whenever we search movies.
        <Link to='/'>
            <div className="divInput">
                <label>Search by rate:</label>

                {/* Use input field to query videos by name. */}
                <input type="text"
                    value={rate}

                    //I set this input value to keep it's state.  
                    onChange={(e) => setRate(e.target.value)}

                    //Call searchByRate action from Redux.
                    onKeyUp={() => props.searchByRate(rate)}

                    //Set input field empty if we click elswhere.
                    onBlur={() => setRate('')}>
                </input>
            </div>
        </Link>
    )
}

// I use Redux action to dispach searchByName function.
const mapDispatchToProps = dispatch => {
    return {
        searchByRate: (rate) => dispatch(searchByRate(rate)),
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(SearchByRate)
