import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from "uuid"
import Form from './Form'
import Cards from './Cards'



const Main = () => {
    const initialState = JSON.parse(localStorage.getItem('cardsList')) || [];
    const [ cardsList, setCardsList ] = useState(initialState)
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ term, setTerm ] = useState([])
    const [ editCard, setEditCard ] = useState(null)
    // const [ formData, setFormData ] = useState([{
    //     name: "",
    //     description: "",
    //     price: ""
    // }])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editCard) {
            setCardsList([ ...cardsList, {id: uuidv4(), name: name, description, price, completed: false }])
            setName("")
            setDescription("")
            setPrice("")
        }
    }  

    useEffect(() => {
        if(term) {
            const filterData = cardsList.filter((card) =>card.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setTerm(filterData)
        }
        
    },[searchTerm, cardsList])
    
    

    
    
    
    
    useEffect(() => {
        localStorage.setItem("cardsList", JSON.stringify(cardsList));
      }, [cardsList])

    

    return (
        <div>
            <div  className='header' style={{display: 'flex'}}>
                <form className="" onSubmit={handleSubmit}>
                    <button  className='btn1' type="submit"     color='success' >+ Add</button>
                </form>
                <div className='search'>
                    <input className="form-control1 " type="search" onChange={(e) => {setSearchTerm(e.target.value)}} placeholder="Search.."  aria-label="Search"/>
                </div>
            </div>
            <div container spacing={3} className='wrapper'>
                <div xs={12} sm={6} className="list">
                    <Cards  term={term} editCard={editCard} setEditCard={setEditCard} cardsList={cardsList} setCardsList={setCardsList}  />
                </div>
                <div xs={12} sm={6} className="list">
                    <Form  cardsList={cardsList} setCardsList={setCardsList} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} editCard={editCard} setEditCard={setEditCard}/>
                </div>
            </div>
        </div>
    )
}

export default Main


