import React, { useState } from "react";
import Slider from "@mui/material/Slider"
import style from "../styles/lore.module.css";

export default function LorePage() {
    const [year, setYear] = useState(2024);

    const handleYearChange = (event, newValue) => {
        setYear(newValue);
    };

    return (
        <div className={style.container}>
            <div className={style.title}>
                Lore Page
            </div>

            <div className={style.sliderContainer}>
                <Slider
                    value={year}
                    onChange={handleYearChange}
                    valueLabelDisplay="auto"
                    min={2001}
                    max={2024}
                    step={1}
                    marks
                />

                <div>
                    Selected Year: {year}
                </div>
            </div>
        </div>
    );
};