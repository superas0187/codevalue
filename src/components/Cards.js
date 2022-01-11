import React from 'react'
import jsImg from './image/javascript_logo.png'



const Cards = ({ term ,cardsList, setCardsList, setEditCard}) => {
    

    const handleEdit = ({id}) => {
        const findCard = cardsList.find((card) => card.id === id)
        setEditCard(findCard)
    }

    const handleDelete = ({id}) => {
        setCardsList(cardsList.filter((card) => card.id !== id))
    }

    
    return (
        <div >
            {term.map((card) => (
                <div   item xs={12} sm={6}  className='card' key={card.id} >
                    <a  style={{cursor: 'pointer'}} type="button" onClick = {() => handleEdit(card)}  >
                        <div className="card1" >
                            <img src={jsImg} className="card-img" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">{card.name}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    </a>
                    <div >
                        <button type="button" aria-label="delete"  onClick = {() => handleDelete(card)} className="btn ">Delete</button>
                    </div>
               </div> 
            ))}
        </div>
    )
}

export default Cards
