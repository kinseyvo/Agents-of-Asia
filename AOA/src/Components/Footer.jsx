import React from "react";
import style from "../styles/footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={style.footerContainer}>
            <div className={style.left}>
                &copy; {currentYear} OverlordKinsey
            </div>
            <div className={style.right}>
                <a href="https://github.com/kinseyvo/Agents-of-Asia/issues/new" target="_blank" rel="noopener noreferrer">Report a Bug</a>
                <button onClick={() => window.location.href = 'mailto:kinseyvo@outlook.com'}>Get in Touch</button>
            </div>
        </div>
    );
}
