
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

//recoilroot

/* This component needs to wrapp every component that uses hook */
function App() {
   return <RecoilRoot>
   <MainApp></MainApp>
   </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  
  const messagingCount = useRecoilValue(messagingAtom)
  
  const notificationCount = useRecoilValue(notificationsAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )

  
}

export default App
