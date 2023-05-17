import React from 'react'
import propTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,handleDelete}) {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
}
  return (
    <div className='feedback-list'> 
      {feedback.map((item)=>{
       return <FeedbackItem key={item.id} 
       item={item} 
       handleDelete={handleDelete}/>
      })}
    </div>
  )
}
FeedbackList.propTypes ={
  feedback: propTypes.array.isRequired
}
export default FeedbackList
