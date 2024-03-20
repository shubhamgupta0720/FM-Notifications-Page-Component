import './App.css'
import Notification from './components/Notification'

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
          <Notification imgSource = "././assets/images/avatar-angela-gray.webp" personName="James Charles" message='Joined'/>
        </div>
      </main>
    </>
  )
}

export default App
