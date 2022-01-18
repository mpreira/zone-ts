import React, { FC } from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faCompass, faNewspaper, faVideo, faClock} from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export const MobileNav : FC = () => {
    return(
        <div className="mobile-nav"> 
            <ul className="mobile-nav-container">
                <li>
                    <Link to="/test">
                        <FontAwesomeIcon icon={faCompass} className="nav-icons fa-lg" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <FontAwesomeIcon icon={faNewspaper} className="nav-icons fa-lg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="nav-icons fa-lg" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <FontAwesomeIcon icon={faVideo} className="nav-icons fa-lg" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <FontAwesomeIcon icon={faClock} className="nav-icons fa-lg" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}