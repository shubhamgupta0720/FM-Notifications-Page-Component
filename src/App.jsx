import './App.css'
import Notification from './components/Notification'
import markWebberProfile from "../src/assets/images/avatar-mark-webber.webp"
import angelaGrey from "../src/assets/images/avatar-angela-gray.webp"
import jacobThompson from "../src/assets/images/avatar-jacob-thompson.webp"
import rizkyHasanuddin from "../src/assets/images/avatar-rizky-hasanuddin.webp"
import kimberlySmith from "../src/assets/images/avatar-kimberly-smith.webp"
import nathanPeterson from "../src/assets/images/avatar-nathan-peterson.webp"
import annaKim from "../src/assets/images/avatar-anna-kim.webp"
import imageChess from "../src/assets/images/image-chess.webp"
import { useState } from 'react'


function App() {

  const [totalCount, setTotalCount] = useState(7);
  let [allRead, setAllRead] = useState(false);

  const clickToReadNotif = () => {
    setTotalCount(totalCount - 1);
  }

  const markAllAsRead = () => {
    setAllRead(!allRead);
    if(!allRead) setTotalCount(0);
    else setTotalCount(7);
  }

  return (
    <>
      <main>
        <div id="notificationCard">
          <div className="title-mark">
            <div className="title-notif-count">
              <h1>Notifications</h1>
              {totalCount != 0 && <label>{totalCount}</label>}
            </div>
            <a onClick={markAllAsRead}>Mark all as {allRead ? 'unread' : 'read'}</a>
          </div>
          <Notification onClick={clickToReadNotif} imgSource = {markWebberProfile} personName="Mark Webber" message='reacted to your recent post' mainContent='My first tornament today!' time='1m ago' allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {angelaGrey} personName="Angela Grey" message='followed you' time='5m ago' allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {jacobThompson} personName="Jacob Thompson" message='has joined your group' group='Chess Club' time='1 day ago' allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {rizkyHasanuddin} personName="Rizky Hasanuddin" message='sent you a private message' time='5 days ago' 
          privateMessage = "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I am having lots of fun and improving the game" allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {kimberlySmith} personName="Kimberly Smith" message='commented on your picture' time='1 week ago' postPhotoSource={imageChess} allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {nathanPeterson} personName="Nathan Peterson" message='reacted to your recent post' mainContent='5 end-game strategies to increase win rate' time='2 weeks ago' allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
          <Notification onClick={clickToReadNotif} imgSource = {annaKim} personName="Anna Kim" message='left the group' group='Chess Club' time='2 weeks ago' allNotifBgColor={allRead ? 'white' : 'hsl(210, 60%, 98%)'}/>
        </div>
      </main>
    </>
  )
}

export default App
