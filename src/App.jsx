import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import img from './assets/IMG_9497.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="header"><img className="image" src={img} alt="quote" /></div> */}
      <ContactList/>
    </>
  )
}

export default App
