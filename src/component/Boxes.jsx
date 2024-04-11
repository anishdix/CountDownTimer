import React from 'react'
import "./Boxes.css"
const Boxes = ({target}) => {
    let timeLeft={
      days:0,
      hrs:0,
      min:0,
      sec:0,
    }
    
    if(target>0)
      {
        timeLeft={
          days:Math.floor(target/(1000*60*60*24)),
          hrs:Math.floor((target/(1000*60*60))%24),
          min:Math.floor((target/(1000*60))%60),
          sec:Math.floor((target/1000)%60)
        }
      }
    


    

  return (
    <div>

      
    <div className='boxContainer'>
      
      <div className='dayBox box'>
        <span>{timeLeft.days}</span>
        <span className='text'>days</span>
      </div>
      <div className='hrsBox box'>
      <span>{timeLeft.hrs}</span>
        <span className='text'>hours</span>
      </div>
      <div className='minBox box'>
      <span>{timeLeft.min}</span>
        <span className='text'>minutes</span>
      </div>
      <div className='secBox box'>
      <span>{timeLeft.sec}</span>
        <span className='text'>seconds</span>
      </div>
      </div>
      
      </div>
  )
}

export default Boxes
