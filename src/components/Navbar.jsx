import React from "react";

import Navbar_Button from "./buttons/Navbar";

export default function Navbar() {
    const [items_visible, set_items_visible] = React.useState(false);
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src="/icons/logo.png" className="navbar-icon" width={120} height={65} />
                </div>
                <div className="navbar-right">
                    <div className={`navbar-items ${items_visible ? "visible" : ""}`}>
                        <Navbar_Button client:load title={"Home"} href={"/"} />
                        <Navbar_Button client:load title={"Terms Of Service"} href={"/tos"} />
                        <Navbar_Button client:load title={"Commands"} href={"/commands"} />
                        <Navbar_Button client:load title={"Documentation"} href={"/docs"} />
                        <Navbar_Button client:load title={"Sign In"} white={true} href={"https://dashboard.bot.skybeworld.com"} />
                    </div>
                    <Navbar_Button
                    client:load
                    title={"Menu"}
                    id={"navbar-menu"}
                    white={true}
                    on_click={() => {
                        set_items_visible(!items_visible);
                    }}
                    />
                </div>
            </div>
        </div>
    )
}