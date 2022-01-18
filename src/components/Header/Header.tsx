import React, {FC} from "react";
import { Link } from "react-router-dom";
import { User, Menu } from "../../@types/assets/images";

export const Header : FC = () => {
    return(
        <header>
            <h1>
                Zone Mixte
            </h1>
            <div className="header-icons">
                <img 
                    src={Menu}
                    className="mt-1 mr-1 h-icon" 
                    alt="menu" 
                />
                <Link to="#">
                    <img 
                        src={User} 
                        className="h-icon"
                        alt="utilisateur" 
                    />
                </Link>
            </div>
        </header>
    )
}