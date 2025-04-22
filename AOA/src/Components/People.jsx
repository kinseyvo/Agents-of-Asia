import React from "react";
import style from "../styles/people.module.css";

import justin from "../assets/justin.jpg";
import shawn from "../assets/shawn.jpg";
import kinsey from "../assets/kinsey.jpeg";
import { FaUser, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function People() {

    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img src={justin} alt="jin" />
                    <label><FaUser /> Justin Duong</label>
                    <div className={style.socialMedia}>
                        <a href="https://www.instagram.com/duong.justin/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={shawn} alt="flow" />
                    <label><FaUser /> Shawn Nguyen</label>
                    <div className={style.socialMedia}>
                        <a href="https://www.instagram.com/awkward_raisin/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={kinsey} alt="grayson" />
                    <label><FaUser /> Kinsey Vo</label>
                    <div className={style.socialMedia}>
                        <a href="https://www.instagram.com/kinsey.vo/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/kinsey-vo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};