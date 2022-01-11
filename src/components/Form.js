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

        if(name === "name" ) {
            setName(value) 
        }
        if(name === "description") {
            setDescription(value)
        }
        if(name === "price") {
            setPrice(value)
        }
    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({
    //       ...values,
    //       [name]: value,
    //     });
    //   };

    return (
        <fieldset >
            <legend  style={{marginLeft: '20px', fontSize: '20px'}}><strong>{editCard ? editCard.name : "Product Details"}</strong></legend>
            <form type="form" className=" form"  onSubmit={handleSubmit} >
                <img src={jsImg} alt="..."/>
                <div className=" form-label">
                    <label  >Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} className="form-control"/>
                    {/* <input  onChange​= {(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type="text" name="name"  /> */}
                </div>
                <div className=" form-label">
                    <label  >Description</label>
                    <input type="text" name="description" value={description} onChange={handleChange} className="form-control-search"  ></input>
                    {/* <input  onChange​= {(e) => setFormData({...formData, description: e.target.value})} value={formData.description} type="text" name="description"  />  */}
                </div>
                <div className=" form-label">
                    <label >Price&nbsp;</label>
                    <input type="number" name="price" value={price} onChange={handleChange} className="form-control-price"  />&nbsp;$
                    {/* <input  onChange​= {(e) => setFormData({...formData, price: e.target.value})} value={formData.price} type="text" name="price"  />  */}
                </div>
                <div>
                    <button type="submit" className="btn " >{editCard ? "Update" : "Save"}</button>
                </div>
            </form>
        </fieldset>
    )
}

export default Form
