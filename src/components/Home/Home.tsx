import React, {FC} from "react";
import { Link } from "react-router-dom";

// components
import { FootImg, AthleImg, NatationImg, EscrimeImg } from "../../@types/assets/images";

export const Home : FC = () => {
    return(
        <section className="layout">

            <article className="home-article">
                
                <div className="article-details">
                    <span>tag</span>
                    <span>timestamp</span>
                </div>

                <div className="relative">
                    <img src={FootImg} alt="football" className="home-img" />
                </div>
                
                <Link to="#" className="h2 article-title">Lorem Ipsum</Link>
            </article>

            <article className="home-article">

                <div className="article-details">
                    <span>tag</span>
                    <span>timestamp</span>
                </div>
                
                <div className="relative">
                    <img src={AthleImg} alt="athletisme" className="home-img" />
                </div>
                
                <Link to="#" className="h2 article-title">Titre de l'article</Link>
            </article>

            <article className="home-article">
                <div className="article-details">
                    <span>tag</span>
                    <span>timestamp</span>
                </div>
                <div className="relative">
                    <img src={NatationImg} alt="natation" className="home-img" />
                </div>
                
                <Link to="#" className="h2 article-title">Titre de l'article</Link>
            </article>

            <article className="home-article">
                <div className="article-details">
                    <span>tag</span>
                    <span>timestamp</span>
                </div>
                <div className="relative">
                    <img src={EscrimeImg} alt="football" className="home-img" />
                </div>
                <Link to="#" className="h2 article-title">Titre de l'article</Link>
            </article>
            
        </section>
    )
}