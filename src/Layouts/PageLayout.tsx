import React, {useState, useEffect, FC} from "react";
import { Outlet } from "react-router-dom";

// components
import { SportsNav } from "../components/Nav/SportsNav";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MobileNav } from "../components/Nav/MobileNav";

export const PageLayout : FC = ({children}) => {

    const [isXLarge, setIsXLarge] = useState(window.innerWidth >= 1280);

    const updateMedia = () => {
        setIsXLarge(window.innerWidth >= 1280);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    return isXLarge ? (
        <div className="app">
            <Header />
            <SportsNav />
                <main className="main-container">
                    <Outlet />
                </main>
            <Footer />
        </div>
    ) : (
        <div className="app">
            <Header />
            <SportsNav />
            <main className="main-container">
                <Outlet />
            </main>
            <MobileNav />
        </div>
    )
}