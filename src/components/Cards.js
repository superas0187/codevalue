import React from 'react'
import { Card, CardActionArea } from '@material-ui/core';
import jsImg from './image/javascript_logo.png'


const Cards = ({ cardsList, setCardsList, setEditCard, searchTerm }) => {

    const handleEdit = ({id}) => {
        const findCard = cardsList.find((card) => card.id === id)
        setEditCard(findCard)
    }

    const handleDelete = ({id}) => {
        setCardsList(cardsList.filter((card) => card.id !== id))
    }

   

    

    
    
    

    return (
        <div   >
            {cardsList.filter((card) => {
                if(searchTerm === "") {
                    return card
                }else if(card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return card
                }
            }).map((card) => (
                <Card  item xs={12} sm={6}  className='card' key={card.id} >
                    <CardActionArea onClick = {() => handleEdit(card)} >
                   <div className="card1" >
                        <img src={jsImg} className="card-img" alt="..."/>
                       <div className="card-body">
                           <h5 className="card-title">{card.name}</h5>
                           <p className="card-text">{card.description}</p>
                       </div>
                   </div>
                   </CardActionArea>
                   <div className="btn3">
                       <button type="submit" onClick = {() => handleDelete(card)} className="btn ">Delete</button>
                    </div>
               </Card> 
            ))}
            
        </div>
    )
}

export default Cards
