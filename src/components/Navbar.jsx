import React from "react";

import Navbar_Button from "./buttons/Navbar";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src="/icons/logo.png" width={120} height={65} />
                </div>
                <div className="navbar-right">
                    <Navbar_Button title={"Home"} href={"/"} />
                    <Navbar_Button title={"Terms Of Service"} href={"/tos"} />
                    <Navbar_Button title={"Commands"} href={"/commands"} />
                    <Navbar_Button title={"Documentation"} href={"/docs"} />
                    <Navbar_Button title={"Sign In"} white={true} href={"/account/auth"} />
                </div>
            </div>
        </div>
    )
}