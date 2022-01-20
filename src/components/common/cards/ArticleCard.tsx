import React, {FC} from "react";
import { Link } from "react-router-dom";

export interface ArticleProps{
    location: string
    image:string
    title: string
}

export const ArticleCard : FC<ArticleProps> = () => {
    return(
        <article className="">
            article card
        </article>
    )
}