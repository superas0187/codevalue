import React from 'react'
import jsImg from './image/javascript_logo.png'



const Cards = ({term ,contacts, setContacts, setEditContact}) => {

    const handleEdit = ({id}) => {
        const findCard = contacts.find((contact) => contact.id === id)
        setEditContact(findCard)
        console.log(findCard)
    }
    const handleDelete = ({id}) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }

    
    return (
        <div >
            { term?.map((contact) => (
                <div      className='card' key={contact.id} >
                    <i  style={{cursor: 'pointer'}} type="button" onClick = {() => handleEdit(contact)}   >
                        <div className="card1" >
                            <img src={jsImg} className="card-img" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text">{contact.description}</p>
                            </div>
                        </div>
                    </i>
                    <div >
                        <button type="button" onClick={() => handleDelete(contact)}  aria-label="delete"   className="btn ">Delete</button>
                    </div>
               </div> 
            ))}
        </div>
    )
}

export default Cards




