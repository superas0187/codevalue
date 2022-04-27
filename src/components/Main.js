import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from "uuid"
import Form from './Form'
import Cards from './Cards'



const Main = () => {
    const initialState = JSON.parse(localStorage.getItem('contacts')) || [];
    const [ contacts, setContacts ] = useState(initialState)
    const [ editContact, setEditContact ] = useState(null)
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ term, setTerm ] = useState([])
    const [ contactInfo, setContactInfo ] = useState({
        name: "", description: "", price: "",
    })
   

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])

    useEffect(() => {
          
        if(term) {
            const filterData = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setTerm(filterData)
            console.log(filterData)
        }
        
    },[searchTerm, contacts])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editContact) {
            setContacts([...contacts, {id: uuidv4(), ...contactInfo, completed: false }])
            setContactInfo({name: "", description: "", price: ""})
        }
    }  

    

    return (
        <>
        
            <div  className='header'>
                <form className="" onSubmit={handleSubmit} >
                    <button  className='btn1' type="submit"   color='success' >+ Add</button>
                </form>
                <div className='search'>
                    <input className="form-control1 "  type="search" onChange={(e) => {setSearchTerm(e.target.value)}} placeholder="Search.."  aria-label="Search"/>
                </div>
            </div>
        
            <div  className='wrapper'>
                <div>
                    <Cards  term={term} contacts={contacts} setContacts={setContacts} setEditContact={setEditContact}  />
                </div>
                <div>
                    <Form  contactInfo={contactInfo} setContactInfo={setContactInfo}  contacts={contacts} editContact={editContact} setEditContact={setEditContact}   setContacts={setContacts}  />
                </div>
            </div>
        </>
    )
}

export default Main


