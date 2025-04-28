
import './App.css'
import Provider from './provider/Provider'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Provider>
     
     <Outlet/>
     
      </Provider>
    </>
  )
}

export default App
