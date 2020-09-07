import React from 'react'
import '../../css/MainHeader.css'
import BtnAwesomeMovies from '../ElementComponents/BtnAwsomeMovies'
import SelectCategory from '../QueryMovies/SelectCategory'
import SearchByRate from '../QueryMovies/SearchByRate'
import SearchByYear from '../QueryMovies/SearchByYear'
import SearchByName from '../QueryMovies/SearchByName'

//This is the fixed main header of the site. It is only a container for button select and search inputs. 
const MainHeader = () => {

    return (
        <header>

            {/* BtnAwesomeMovies brings us back to the initial site  */}
            <BtnAwesomeMovies></BtnAwesomeMovies>

            {/* SelectCategory let's us select from the cataegories */}
            <SelectCategory></SelectCategory>

            {/* This three search inputs let's us search by Rate, Year and Name.
            Rate and Year accepts only precise matching while Name is giving back part matching as well. */}
            <SearchByRate></SearchByRate>
            <SearchByYear></SearchByYear>
            <SearchByName></SearchByName>

        </header>
    )
}

export default MainHeader
