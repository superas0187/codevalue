import React,{ useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import jsImg from './image/javascript_logo.png'

const Form = ({ contactInfo, setContactInfo ,setContacts,contacts, editContact, setEditContact}) => {
    

    const updateContact = (name, description, price, id, completed) => {
        const newCard = contacts?.map((contact) => 
         contact.id === id ? { name, description, price, id, completed} : contact
     )
        setContacts(newCard)
        setEditContact("")
        console.log(newCard)
    }
    
    useEffect(() => {
        
        if(editContact) {
            setContactInfo(editContact)
            console.log(editContact)
            console.log(contactInfo)
        
        }else {
            setContactInfo({name: "", description: "", price: "", })
        }
    },[ editContact,  setContactInfo ])

   

    
   
 

    const handleChange = (e) => {
        const { name, value } = e.target
        setContactInfo({ ...contactInfo, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, description, price } = contactInfo
            if(!editContact) {
                setContacts([...contacts, {id: uuidv4(), ...contactInfo, completed: false }])
                setContactInfo({name: "", description: "", price: ""})
                console.log(contacts)
                console.log(contactInfo)
                console.log(editContact)
            
            }else {
                updateContact(name, description, price, editContact.id, editContact.completed)
            }  
    }

   

    return (
        <fieldset className='form1' style={{  border: '3px solid black'}} >
            <legend  style={{marginLeft: '20px', fontSize: '20px'}}><strong>{editContact ? contactInfo.name : 'Product Details'}</strong></legend>
            <form  className=" form"  onSubmit={handleSubmit} >
                <img src={jsImg} alt="..."/>
                <div className=" form-label">
                    <label  >Name</label>
                    <input type="text" name="name" value={contactInfo.name} onChange={handleChange} className="form-control"/>
                </div>
                <div className=" form-label">
                    <label  >Description</label>
                    <input type="text" name="description" value={contactInfo.description} onChange={handleChange} className="form-control-search"  />
                </div>
                <div className=" form-label">
                    <label  >Price</label>
                    <input type="number" name="price" value={contactInfo.price} onChange={handleChange} className="form-control-price"/>
                </div>
                <div>
                    <button type="submit" className="btn " >{editContact ? 'Update' : 'Save'}</button>
                </div>
            </form>
        </fieldset>
    )
}

export default Form





