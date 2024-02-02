
function SelectedContact({contact, setShowSelectedContact}){

    function handleClick (){
        setShowSelectedContact(false)
    }

    return <>
        <div className="card" onClick={handleClick}>
            <h3 >{contact.name}</h3>
            <div >{contact.company.name}</div>
            <div >{contact.company.website}</div>
        </div>
    
    </>
}

export default SelectedContact;