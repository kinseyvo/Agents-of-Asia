import React from "react";
import style from "../styles/people.module.css";

export default function People() {

    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
                <div className={style.card}>Justin Duong</div>
                <div className={style.card}>Shawn Nguyen</div>
                <div className={style.card}>Kinsey Vo</div>
            </div>
        </div>
    );
};