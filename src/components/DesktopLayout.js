import React from "react";
import logo from "../image/logo.png";

function DesktopLayout({content}){

    return(
        <>
            {
                <div className="bg-image">
                    <div className="container">
                        <div className="content-container">
                            <div className="logoImage">
                                <img src={logo} alt="logo" />
                            </div>
                            {content}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DesktopLayout;