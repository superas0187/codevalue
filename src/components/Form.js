import React,{ useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import jsImg from './image/javascript_logo.png'

const Form = ({ setEditCard, editCard, setCardsList, cardsList, name, setName, description, setDescription, price, setPrice }) => {

    const updateCard = ( name, description, price, id, completed) => {
        const newCard = cardsList.map((card) =>
        card.id === id ? { name, description, price, id, completed } : card 
        );
        setCardsList(newCard)
        setEditCard("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editCard) {
            setCardsList([ ...cardsList, {id: uuidv4(), name: name, description, price, completed: false }])
            setName("")
            setDescription("")
            setPrice("")
        }else {
            updateCard(name, description, price, editCard.id, editCard.completed)
        }
        
    }

    useEffect(() => {

        if(editCard) {
            setName(editCard.name)
            setDescription(editCard.description)
            setPrice(editCard.price)
        }else {
            setName("")
            setDescription("")
            setPrice("")
        }

    },[setName, setDescription, setPrice, editCard])

    const handleChange = (e) => {
        const { name, value } = e.target

        if(name === "name") {
            setName(value)
        }
        if(name === "description") {
            setDescription(value)
        }
        if(name === "price") {
            setPrice(value)
        }
    }

    return (
        <div >
            <form className=" form"  onSubmit={handleSubmit} >
                <h4>{editCard ? editCard.name : "Product Details"}</h4>
                <img src={jsImg} alt="..."/>
                <div className="form-label">
                    <label  className="">Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-label">
                    <label  className="">Description</label>
                    <input type="text" name="description" value={description} onChange={handleChange} className="form-control-search"  ></input>
                </div>
                <div className="form-label">
                    <label  className="">Price&nbsp;</label>
                    <input type="number" name="price" value={price} onChange={handleChange} className="form-control-price"  />&nbsp;$
                </div>
                <div className="btn3 ">
                    <button type="submit" className="btn " >{editCard ? "Update" : "Save"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
