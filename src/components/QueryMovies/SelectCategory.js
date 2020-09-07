import React from 'react'
import { connect } from 'react-redux'
import { searchByCategory } from '../../redux/mainActions'
import { Link } from 'react-router-dom'


//This select element is resposible for querying movies by category.
//At the moment we can search only one particular category from the drop down list
//but this may change in the next version.
const SelectCategory = (props) => {

    return (

        //I use Link to go back to main page whenever we query movies by category.
        <Link to='/'>
            <div>

                {/* I use HTML select element to create a dropdown list for categories.
                In the next version I might use another type of dropdown element with more possibilities. */}
                <select className="selectCategories"

                    //Call searchByCategory from Redux to query movies by category.
                    onChange={(e) => props.searchByCategory(e.target.value)} >

                    {/* Make default option as CATEGORIES 
                    and I use it in Redux reducer to give back initial videos. */}
                    <option value="CATEGORIES">CATEGORIES</option>

                    {/* Mapping through categories from Redux State and set them as values. */}
                    {props.categories.map((category, index) =>
                        <option key={index} value={category}>
                            {category.toUpperCase()}
                        </option>)}

                </select>
            </div>
        </Link>
    )
}

//Calljng categories from Redux state.
const mapStateToProps = (state) => ({
    categories: state.videos.categories
})

// I use Redux action to dispach searchByCategory function.
const mapDispatchToProps = dispatch => {
    return {
        searchByCategory: (category) => dispatch(searchByCategory(category))
    }
}

//Connect Redux store to this page.
export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory)