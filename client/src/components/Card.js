import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
const Card = (props) => {
  return (
    <div className='card'>
    <div className='card-container'>
        <div className='image-container'>
            <img src={props.imageUrl} alt="hii"></img>
        </div>
        <div className='card-content'>

        <div className='card-title'>
           <h3> {props.title}</h3>
        </div>
        <div className='class-body'>
            {props.body}
        </div>
        </div>
        <div className='btn'>
            <button
            >
                <a href='https://munavvarpopatiya.tech/' target="_blank" rel='noopener noreferrer'>
                    view More
                </a>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Card