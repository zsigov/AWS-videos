import React from 'react';
import { Link } from 'react-router-dom'

//This is the main side bar of the site. 
//It contains Links to different pages.
export function MainSideBar() {
    return (
        <div>


            <nav className="mainNavBar">

                {/* Place of links */}
                <ul>
                    <Link to='/About' ><li> About </li></Link>
                    <Link to='/News' > <li> News </li></Link>
                    <Link to='/Support'><li> Support </li></Link>
                </ul>

                {/* Place of banners or pictures. As the page grows they might be usefull */}
                <span>Place of banners:</span>
                <img className="imgSideBar"
                    src={"https://www.w3schools.com/howto/img_forest.jpg"}
                    alt="image">
                </img>
            </nav>
        </div>
    )
}

export default MainSideBar;