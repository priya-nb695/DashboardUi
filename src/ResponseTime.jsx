import React from 'react'

const ResponseTime = () => {
  return (
    <div className='responseConatiner'>
      <div className='purple'>Std Time-2min</div>
      <div className='ansConatiner'><span className='green'>60%</span>Ans took 2min</div>
      <hr className='line'/>
      <p>You are <span  className='red'>slow</span>!</p>
    </div>
  )
}

export default ResponseTime
