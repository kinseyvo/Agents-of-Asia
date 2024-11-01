import React from "react";
import style from "../styles/people.module.css";

import mountain from "../assets/mountains.jpg";
import kinsey from "../assets/kinsey.jpeg";
import { FaUser, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function People() {

    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img src={mountain} alt="jin" />
                    <label><FaUser/> Justin Duong</label>
                    <a href="https://www.instagram.com/duong.justin/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <div className={style.card}>
                    <img src={mountain} alt="flow" />
                    <label><FaUser/> Shawn Nguyen</label>
                    <a href="https://www.instagram.com/awkward_raisin/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <div className={style.card}>
                    <img src={kinsey} alt="grayson" />
                    <label><FaUser/> Kinsey Vo</label>
                    <a href="https://www.instagram.com/kinsey.vo/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/kinsey-vo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};