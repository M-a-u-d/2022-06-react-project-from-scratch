import React from "react";
import {NavLink} from "react-router-dom";


function TopMenu() {

    return (
        <nav className="navNav">
            <ul className="NavBar">
                <li>
                <NavLink exact to="/" activeClassName = "active-link">
                    Reddit
                </NavLink>
             </li>
                <li>
                    <NavLink exact to="/Subreddit" activeClassName = "active-link">
                        Subreddit
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/Subreddit/memes" activeClassName = "active-link">
                        Memes
                    </NavLink>
                </li>

            </ul>

        </nav>

    )
}
export default TopMenu;