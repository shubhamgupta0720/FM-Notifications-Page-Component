import React, { useContext, useEffect, useState } from "react";
import NotificationContext from "../context/NotificationContext";

function Notification({onClick, imgSource = "", personName = "", message = "", mainContent = "", group = "", time = "", postPhotoSource = "", privateMessage = ""}) {
    
    
    const {allNotifRead} = useContext(NotificationContext);
    

    // useEffect(() => {
    //     setBgColor(allNotifBgColor);
    //     setNotifRead(false);
    // }, [allNotifBgColor]);

    if(allNotifRead){
        console.log('notifRead')
        return (
            <div className="allNotifs" style={{backgroundColor : 'white'}}>
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
        )
    }

    else{
        const [notifRead, setNotifRead] = useState(false);
        const [bgColor, setBgColor] = useState('hsl(210, 60%, 98%)');
        const clickToReadNotif = () => {
            if(!notifRead){
                setNotifRead(true);
                setBgColor('white');
                onClick();
            }
        }
        console.log("notifUnread")
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
                            {notifRead ? '' : <span className="redNewNotif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
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
}

export default Notification