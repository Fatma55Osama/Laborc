import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function StarRating({rate=0 ,totalStars=5}) {
  return (
    <div className='d-flex gap-2'>
        {
            Array.from({length:totalStars},(_,index)=>(
            <span key={index} style={{ color: index < rate ? '#4a43dd' : '#787b7e' }}>
               <FaStar />
            </span>
            ))
        }
    </div>
  )
}
