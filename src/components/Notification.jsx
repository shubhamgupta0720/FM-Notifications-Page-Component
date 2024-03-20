import React from "react";

function Notification({imgSource = "", personName = "", message = "", group = "", time = ""}) {

    return(
        <div id="notificationCard">
            <img src={imgSource} alt="profilePhoto" />
            <div className="content-time">
                <h1>{personName} {message} {group}</h1>
            </div>
        </div>
    );
}

export default Notification