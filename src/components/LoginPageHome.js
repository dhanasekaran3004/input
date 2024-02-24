import React from "react";
import "../css/home.css";
import Form from "./FormComponent";
import { isMobile } from "./helper";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function Home() {
    const deviceType = isMobile();
    const signInContent =
        <>
            <h4 className="loginText">Please login to continue</h4>
            <Form />
            <div className="signText">
                <p>Don't have an account?
                    <span className="signUpLink"> Sign up</span>
                </p>
            </div>
        </>
    const mobileSignInContent = (
        <>
            <div className="MobileForm">
                <Form />
            </div>
            <div className="signText">
                <p>Don't have an account?
                    <span className="signUpLink"> Sign up</span>
                </p>
            </div>
        </>
    );
    return (
        <>
            {!deviceType &&
                <DesktopLayout content={signInContent} />
            }
            {deviceType &&
                <MobileLayout content={mobileSignInContent} />
            }
        </>
    );
}

export default Home;