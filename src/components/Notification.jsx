import React from "react";

function Notification({imgSource = "", personName = "", message = "", mainContent = "", time = ""}) {

    return(
        <div id="individualNnotif">
            <img src={imgSource} alt="profilePhoto" />
            <div className="content-time">
                <div className="content">
                    <span>{personName} </span>
                    <span>{message} </span>
                    <span>{mainContent} </span>
                </div>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default Notification