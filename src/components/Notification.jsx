import React from "react";

function Notification({imgSource = "", personName = "", message = "", mainContent = "", group = "", time = "", postPhotoSource = "", privateMessage = ""}) {

    return(
        <div className="allNotifs">
            <div id="individualNnotif">
                <img src={imgSource} alt="profilePhoto" />
                <div className="content-time">
                    <div className="content">
                        <span>{personName} </span>
                        <span>{message} </span>
                        {mainContent != "" && <span className="mainContent">{mainContent} </span>}
                        {group != "" && <span className="group">{group} </span>}
                    </div>
                    <p>{time}</p>
                </div>
                {postPhotoSource != "" && <img src={postPhotoSource} alt="profilePhoto" />}
            </div>
            <div>
                {privateMessage != "" && <div className="private-message">
                    {privateMessage}
                </div> }
            </div>
        </div>
    );
}

export default Notification