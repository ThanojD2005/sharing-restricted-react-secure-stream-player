import './App.css'
import CustomVideoPlayer from './components/CustomVideoPlayer'
import { useSecurity } from './hooks/useSecurity'

function App() {
  const { securityAlert, dismissAlert } = useSecurity();

  return (
    <>
      <CustomVideoPlayer/>
      {securityAlert && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          zIndex: 10000,
        }} onClick={dismissAlert}>
          {securityAlert}
        </div>
      )}
    </>
  )
}

export default App
