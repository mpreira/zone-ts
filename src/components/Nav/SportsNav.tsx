import React, {FC} from "react";
import { Link } from "react-router-dom";
import { Basketball, Football, Judo, Rugby, Volley } from "../../@types/assets/images";

export const SportsNav : FC = () => {
    return(
        <div className="sportsnav">
            <Link to="#">
                <img src={Football} alt="football" />
            </Link>
            <Link to="#">
                <img src={Rugby} className="-rotate-45" alt="rugby" />
            </Link>
            <Link to="#">
                <img src={Basketball} alt="basketball" />
            </Link>
            <Link to="#">
                <img src={Judo} alt="judo" />
            </Link>
            <Link to="#">
                <img src={Volley} alt="volley" />
            </Link>
        </div>
    )
}