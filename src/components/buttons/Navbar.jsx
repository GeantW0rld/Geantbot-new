import React from "react";

export default function Navbar_Button({ title, white, href, id, on_click }) {
    return (
        <a className={`navbar-btn ${white ? "white" : ""}`} id={id} href={href} onClick={on_click}>
            {/* <img src="/icons/logo.png" className="navbar-btn-icon" width={35} height={35} /> */}
            <h2>{title}</h2>
        </a>
    )
}