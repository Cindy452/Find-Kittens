import React from 'react';
import './style.css';


export const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.kitten.id}?set=set4&size=180x180`} alt='kitten' />
            <h2>{props.kitten.name}</h2>
            <p>{props.kitten.email}</p>
        </div>
    )
}