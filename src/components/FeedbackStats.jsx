import React from 'react'
import propTypes from 'prop-types'

function FeedbackStats({feedback}) {
    //calculate ratings avg
    let average = feedback.reduce((acc,cur)=>{
        return acc+ cur.rating
    },0)/ feedback.length
   average = average.toFixed(1).replace(/[.,]$/, '')
   
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Averange Rating: {isNana(average) ? 0 : average} </h4>
    </div>
  )
}
FeedbackStats.propTypes ={
    feedback: propTypes.array.isRequired
}
export default FeedbackStats
