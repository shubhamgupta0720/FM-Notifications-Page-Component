import React from "react";
import { useState } from "react";
import NotificationContext from "./NotificationContext";

const NotificationContextProvider = ({children}) => {
    const [allNotifRead, setAllNotifRead] = useState(false);
    return(
        <NotificationContext.Provider value={{allNotifRead, setAllNotifRead}}>
            {children}
        </ NotificationContext.Provider>
    )
}

export default NotificationContextProvider;