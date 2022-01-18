import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return(
        <nav className="flex px-2 list-none">
            <li className="mr-4">
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/test">Test</Link>
            </li>
        </nav>
    )
}