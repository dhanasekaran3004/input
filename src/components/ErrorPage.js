import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "./helper";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout"

function NoMatch() {
  const deviceType = isMobile();
  const errorText = (
    <>
      <div className="loginSuccessText">
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/input-validation">Go to the home page</Link>
        </p>
      </div>
    </>
  )
  const errorContent = (
    errorText
  )
  const mobileErrorContent = (
    errorText
  ) 
  return (
    <>
      {!deviceType &&
        <DesktopLayout content={errorContent} />
      }
      {deviceType &&
        <MobileLayout content={mobileErrorContent}/>
      }
    </>
  );
}

export default NoMatch;