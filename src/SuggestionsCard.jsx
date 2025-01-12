import React from 'react'

const SuggestionsCard = () => {
  return (
    <div className='SuggestionsCardContainer'>
      <div>
        <p className="purple"> Q. 1-12 </p>
        <div className='timeBox'><span>40</span>sec</div>
        <p style={{color:"#0fb6b0"}}>Easy</p>
      </div>
      <div>
        <p className="purple">Q. 12-32 </p>
        <div className='timeBox'><span>1.5</span>min</div>
        <p style={{color:"#f0ca50"}}>Medium</p>
      </div>
      <div>
        <p className="purple">Q. 32-40 </p>
        <div className='timeBox'><span>3</span>min</div>
        <p style={{color:"red"}}>Hard</p>
      </div>
    </div>
  )
}

export default SuggestionsCard
