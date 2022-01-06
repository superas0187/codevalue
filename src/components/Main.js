import React, {useEffect, useState} from 'react'
import Form from './Form'
import Cards from './Cards'



const Main = () => {
    const initialState = JSON.parse(localStorage.getItem('cardsList')) || [];
    const [ cardsList, setCardsList ] = useState(initialState)
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ editCard, setEditCard ] = useState(null)
    const [ searchTerm, setSearchTerm ] = useState("")
    
    
    
    
    useEffect(() => {
        localStorage.setItem("cardsList", JSON.stringify(cardsList));
      }, [cardsList])
    

  

    

    return (
        <div>
            <div  className='header' style={{display: 'flex'}}>
                <div  >
                    <button  className='btn1' type="button"    color='success' >+ Add</button>
                </div>
                <div className='search'>
                    <input className="form-control1 " type="text" onChange={(e) => {setSearchTerm(e.target.value)}} placeholder="Search.."  aria-label="Search"/>
                </div>
            </div> 
            <div container spacing={3} className='wrapper'>
                <div xs={12} sm={6} className="list">
                    <Cards   searchTerm={searchTerm} setSearchTerm={setSearchTerm} editCard={editCard} setEditCard={setEditCard} cardsList={cardsList} setCardsList={setCardsList}  />
                </div>
                <div xs={12} sm={6} className="list">
                    <Form  cardsList={cardsList} setCardsList={setCardsList} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} editCard={editCard} setEditCard={setEditCard}/>
                </div>
            </div>
        </div>
    )
}

export default Main


