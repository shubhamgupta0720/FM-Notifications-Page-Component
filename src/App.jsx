import './App.css'
import Notification from './components/Notification'
import markWebberProfile from "../src/assets/images/avatar-mark-webber.webp"
import angelaGrey from "../src/assets/images/avatar-angela-gray.webp"
import jacobThompson from "../src/assets/images/avatar-jacob-thompson.webp"

function App() {

  return (
    <>
      <main>
        <div id="notificationCard">
          <div className="title-mark">
            <div className="title-notif-count">
              <h1>Notifications</h1>
              <label>3</label>
            </div>
            <a>Mark all as read</a>
          </div>
          <Notification imgSource = {markWebberProfile} personName="Mark Webber" message='reacted to your recent post' mainContent='My first tornament today!' time='1m ago'/>
          <Notification imgSource = {angelaGrey} personName="Angela Grey" message='followed you' time='5m ago'/>
          <Notification imgSource = {jacobThompson} personName="Jacob Thompson" message='has joined your group' mainContent='Chess Club' time='1 day ago'/>
        </div>
      </main>
    </>
  )
}

export default App
