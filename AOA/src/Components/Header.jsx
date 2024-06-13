import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Toggle Menu");
    }

    return (
        <div className={style.navbar}>
            <Link to="/" className={style.navbarName}>Agents of Asia</Link>
            <div className={style.menuContainer}>
                <button className={style.hamburgerMenu} onClick={toggleMenu}>
                    <span className={style.hamburgerIcon}></span>
                </button>

                {isMenuOpen && (
                    <div>
                        <Link to="/home" className={style.navbarLink}>Home</Link>
                        <Link to="/lorepage" className={style.navbarLink}>Lore</Link>
                        <Link to="/people" className={style.navbarLink}>People</Link>
                    </div>
                )}

                {!isMenuOpen && !isMobile && ( // checks if menu is closed and not mobile
                    <div>
                        <Link to="/home" className={style.navbarLink}>Home</Link>
                        <Link to="/lorepage" className={style.navbarLink}>Lore</Link>
                        <Link to="/people" className={style.navbarLink}>People</Link>
                    </div>
                )}

                {/* NavBar Dropdown Code
                {(isMenuOpen || !isMobile) && ( // checks if menu is open or if it's not mobile
                    <div className={isMenuOpen ? `${style.navbarLinks} ${style.showMenu}` : style.navbarLinks}>
                        <Link to="/home" className={style.navbarLink}>Home</Link>
                        <Link to="/lorepage" className={style.navbarLink}>Lore</Link>
                        <Link to="/people" className={style.navbarLink}>People</Link>
                    </div>
                )} */}
            </div>
        </div>
    );
}