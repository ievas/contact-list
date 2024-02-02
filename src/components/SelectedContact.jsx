
function SelectedContact({contact, setShowSelectedContact}){

    function handleClick (){
        
    }

    return <>
        <div className="card">
            <h3 >{contact.name}</h3>
            <div >{contact.company.name}</div>
            <div >{contact.company.website}</div>
        </div>
    
    </>
}

export default SelectedContact;