import { useState } from "react";
import SelectedContact from './SelectedContact'


function ContactRow ({contact, setSelectedContactId}) {
    // console.log(contact)

    // let [showSelectedContact, setShowSelectedContact] = useState(false)

    function handleClick(){
            setSelectedContactId(contact.id);
    }
   
    return (
        <>
            <tr onClick={handleClick}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
        </>
    )
    

}

export default ContactRow