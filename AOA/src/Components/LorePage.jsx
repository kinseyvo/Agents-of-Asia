import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import style from "../styles/lore.module.css";
import lore from "../data/lore.js";

export default function LorePage() {
    const [year, setYear] = useState(2024);
    const [hasSelectedYear, setHasSelectedYear] = useState(false);

    const handleYearChange = (event, newValue) => {
        setYear(newValue);
        setHasSelectedYear(true);
    };

    const selectedLore = lore.find(item => item.year === year);

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
                    max={2025}
                    step={1}
                    marks
                />
            </div>
            <div className={style.selectedYear}>
                Selected Year: {year}
            </div>
            <div className={style.scrollContainer}>
                {hasSelectedYear ? (
                    selectedLore ? (
                        selectedLore.events.length > 0 ? (
                            <div className={style.information}>
                                {selectedLore.events.map((event, index) => (
                                    <div key={index} className={style.event}>
                                        <h2>{event.name}</h2>
                                        <p>{event.description}</p>
                                        <p>{event.date}</p>
                                        <img src={`../assets/${event.image}`} alt={event.name} className={style.image} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={style.noLoreMessage}>
                                No lore for this year unfortunately.
                            </div>
                        )
                    ) : (
                        <div className={style.noLoreMessage}>
                            No lore for this year unfortunately.
                        </div>
                    )
                ) : (
                    <div className={style.defaultMessage}>
                        Select a Year for Magical Lore
                    </div>
                )}
            </div>
        </div>
    );
};