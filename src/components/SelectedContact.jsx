import { useEffect } from "react";
import { useState } from "react";
import ContactList from "./ContactList";

function SelectedContact({setSelectedContactId, selectedContactId}){

    let [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact(id){
            try {
                let response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`);

                let result = await response.json();

                setContact(result);

            } catch(error){
                console.error(error);
            }
        }
        fetchContact(selectedContactId);
    }, [selectedContactId])

    function handleClick() {
        setSelectedContactId(null)
    }

    if(contact) {
    return <>
        {/* <ContactList /> */}
        <div className="modal">
            <div className="card">
                {selectedContactId && <button onClick={handleClick} className="close-button">x</button>}
                <h3 >{contact.name}</h3>
                <h4>{contact.company.name}</h4>
                <p>{contact.company.catchPhrase}</p>
                <div >{contact.website}</div>
            </div>
        </div>
    
    </>

    }
    
}

export default SelectedContact;