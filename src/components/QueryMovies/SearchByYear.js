import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchByYear } from '../../redux/mainActions'
import { Link } from 'react-router-dom'


//This input element is responsible for querying movies by year like 1997.
//Result will give back part matches as well.
function SearchByYear(props) {

    //I use React useState hook to set rate state.
    const [year, setYear] = useState('')


    return (

        //I use Link to go back to Landing page whenever we search movies.
        <Link to='/'>
            <div className="divInput">
                <label>Search by year:</label>

                {/* Use input field to query videos by name. */}
                <input type="text"
                    value={year}

                    //I set this input value to keep it's state.  
                    onChange={(e) => setYear(e.target.value)}

                    //Call searchByYear action from Redux.
                    onKeyUp={() => props.searchByYear(year)}

                    //Set input field empty if we click elswhere.
                    onBlur={() => setYear('')}>
                </input>
            </div>
        </Link>
    )
}

// I use Redux action to dispach searchByYear function.
const mapDispatchToProps = dispatch => {
    return {
        searchByYear: (year) => dispatch(searchByYear(year))
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(SearchByYear)
