import './App.css'
import Notification from './components/Notification'
import markWebberProfile from "../src/assets/images/avatar-mark-webber.webp"

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
        </div>
      </main>
    </>
  )
}

export default App
