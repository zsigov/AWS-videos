import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchByName } from '../../redux/mainActions'
import { Link } from 'react-router-dom'

//This input element is responsible for querying movies by name.
//Result will give back part matches as well.
function SearchByName(props) {

    //I use React useState hook to set name state.
    const [name, setName] = useState('')

    return (

        //I use Link to go back to Landing page whenever we search movies.
        <Link to='/'>
            <div className="divInput">
                <label>Search by name:</label>

                {/*I use input field to query videos by name. */}
                <input type="text"
                    value={name}

                    //I set this input value to keep it's state.                 
                    onChange={(e) => setName(e.target.value)}

                    //Call searchByName action from Redux.
                    onKeyUp={() => props.searchByName(name)}

                    //Set input field empty if we click elswhere.
                    onBlur={() => setName('')}>
                </input>
            </div>
        </Link>
    )
}

// I use Redux action to dispach searchByName function.
const mapDispatchToProps = dispatch => {
    return {
        searchByName: (name) => dispatch(searchByName(name)),
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(SearchByName)