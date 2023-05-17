import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import Header from './components/Headers'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
function App(){
    const [feedback,setFeedback] = useState(FeedbackData)
    const deleteFeedback= (id)=>{
        if(window.confirm('Are you sure to delete')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
      
    }
    return (
        <>
            <Header/>
            <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
            
        </>
       
    )
}

export default App