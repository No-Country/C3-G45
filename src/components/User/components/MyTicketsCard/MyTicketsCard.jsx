import React from 'react';
import './styles.css'
const MyTicketsCard = ({ item }) => {


return (
    <div className='container  ticketUser'>
        <h3>Item #{item.name_product}</h3>
        <p>{item.description}</p>
    </div>
)
}
export default MyTicketsCard;
