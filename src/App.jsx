import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import img from './assets/IMG_9497.png'


function App() {
  
  let [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {/* <div className="header"><img className="image" src={img} alt="quote" /></div> */}
      

      <ContactList setSelectedContactId={setSelectedContactId}/>
        
      
    </>
  )
}

export default App
