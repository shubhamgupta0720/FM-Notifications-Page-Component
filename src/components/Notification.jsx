import React, { useEffect, useState } from "react";

function Notification({onClick, imgSource = "", personName = "", message = "", mainContent = "", group = "", time = "", postPhotoSource = "", privateMessage = "", allNotifBgColor}) {
    
    const [notifRead, setNotifRead] = useState(false);
    const [bgColor, setBgColor] = useState(allNotifBgColor);

    useEffect(() => {
        setBgColor(allNotifBgColor);
        setNotifRead(false);
    }, [allNotifBgColor]);
    
    const clickToReadNotif = () => {
        if(!notifRead){
            setNotifRead(true);
            setBgColor('white');
            onClick();
        }
    }

    return(
        <div onClick={clickToReadNotif} className="allNotifs" style={{backgroundColor : bgColor}}>
            <div id="individualNnotif">
                <img src={imgSource} alt="profilePhoto" />
                <div className="content-time">
                    <div className="content">
                        <span>{personName} </span>
                        <span>{message} </span>
                        {mainContent != "" && <span className="mainContent">{mainContent} </span>}
                        {group != "" && <span className="group">{group} </span>}
                        {allNotifBgColor == 'white' || notifRead ? '' : <span className="redNewNotif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
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