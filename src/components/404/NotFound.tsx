import React, {FC} from "react";
import { Link } from "react-router-dom";

export const NotFound : FC = () => {
    return(
        <section className="layout">
            <div className="notfound text-lilac">
                <h2>Oups ! La balle est sortie du terrain</h2>
                <p>Cette page n'existe pas</p>
                <p><Link to="/">Retour à l'accueil</Link></p>
            </div>
        </section>
    )
}