import { useState } from "react";
import SelectedContact from './SelectedContact'


function ContactRow ({contact, setSelectedContactId}) {
    // console.log(contact)

    let [showSelectedContact, setShowSelectedContact] = useState(false)

    function handleClick(){
            setSelectedContactId(contact.id);
            setShowSelectedContact(true);
    }
   
    return (
        <>
            <tr onClick={handleClick}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
            {showSelectedContact && <SelectedContact contact={contact} setShowSelectedContact={setShowSelectedContact}/>}
        </>
    )
    

}

export default ContactRow