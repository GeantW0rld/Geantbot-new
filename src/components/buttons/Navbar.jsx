import React from "react";

export default function Navbar_Button({ title, white, href }) {
    return (
        <a className={`navbar-btn ${white ? "white" : ""}`} href={href}>
            {/* <img src="/icons/logo.png" width={35} height={35} /> */}
            <h2>{title}</h2>
        </a>
    )
}