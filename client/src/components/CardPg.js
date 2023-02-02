import React from 'react'
import { Link } from 'react-router-dom'
import './cardpg.css'
const CardPg = (props) => {
    return (
        <div className='card' key={props.id}>
        <div className='card-container' key={props.id}>
            <div className='image-container'>
                <img src={props.imageUrl} alt="hii"></img>
            </div>
            <div className='card-content'>
    
            <div className='card-title'>
               <h3> {props.title}</h3>
            </div>
            <div className='class-body'>
            ₹{props.body}/month
            </div>
            </div>
            <div className='btn'>
                <button
                >
                    <Link to={`/pg/${props.id}`}>
                        view More
                    </Link>
                </button>
            </div>
        </div>
        </div>
      )
}

export default CardPg