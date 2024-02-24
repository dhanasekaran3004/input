import React from "react";
import logo from "../image/logo.png";
import tape from "../image/tape.png";
import man from "../image/man.png";
import wave from "../image/wave.jpg";

function MobileLayout({ content }) {

    return (
        <>
            <div className="mobileDesign">
                <div className="heading">
                    <div className="firstContainer">
                        <img className="MLogo" src={logo} alt="logo" />
                        <h4 className="loginText">Please login to continue</h4>
                    </div>
                    <div className="secondContainer">
                        <img className="MTape" src={tape} alt="logo" />
                    </div>
                </div>
                {content}
                <div className="bottomImage">
                    <img className="tapeImage" src={wave} alt="wave" />
                    <img className="personImage" src={man} alt="Person" />
                </div>
            </div>
        </>
    )
}

export default MobileLayout;