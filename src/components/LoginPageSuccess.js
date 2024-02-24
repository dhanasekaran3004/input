import React from "react";
import "../css/home.css";
import { isMobile } from "./helper";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function Success() {
    const deviceType = isMobile();
    const LoginContent = (
        <>
            <div className="loginSuccessText">
                <h4>Logged-In Successfully</h4>
            </div>
        </>
    )
    const successContent = (
        LoginContent
    );
    const MobileSuccessContent = (
        LoginContent
    )
    return (
        <>
            {!deviceType &&
                <DesktopLayout content={successContent} />
            }
            {deviceType &&
                <MobileLayout content={MobileSuccessContent}/>
            }
        </>
    );
}

export default Success;