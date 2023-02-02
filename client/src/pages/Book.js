import React from 'react'
import { useParams } from 'react-router-dom'
const Book = () => {
    let {id}=useParams();
    console.log(id);
  return (
    <div></div>
  )
}

export default Book