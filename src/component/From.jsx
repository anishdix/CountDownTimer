import React, { useEffect, useState } from 'react'
import "./Form.css"
import Boxes from './Boxes'



const From = () => {
    
    const [dateAndTime,setDateAndTime]=useState(0)
    const [timer,setTimer]=useState(null)
    const [completed,setCompleted]=useState(false)
    const [message,setMessage] = useState("")
    
    const handleChange = (e) => {

      let date = e.target.value
      
      let difference =+new Date()- +new Date(date)
      console.log(difference)
      if(difference >=8640000000)
      {
      setDateAndTime(0)
      document.getElementById('dateInput').value = ''
      setCompleted(true)
      setMessage("Selected time is more than 100 days")
      }
      else
      {

        setDateAndTime(difference)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(timer){
          clearInterval(timer)
          setTimer(null)
        }
        else{
          const interval=setInterval(()=>{
            setDateAndTime(prev=>{
              if(prev>0)
              {
                return prev-1000
              }
              else
              {
                clearInterval(interval)
                setCompleted(true)
                setMessage("The countdown is over! What's next on your adventure?")
                return 0
              }
            })

          },1000);
          setTimer(interval)
        }

        
    }
    const handleCancel=()=>{
      clearInterval(timer)
      setTimer(null)
      setDateAndTime(0)
      document.getElementById('dateInput').value = ''
      setCompleted(false)
      setMessage("")
    }


    useEffect(()=>{
      return ()=>clearInterval(timer)
    },[timer])
    
  return (
    <div className='timer'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='formHeading'>
        <h1 className='formHeading1'>Countdown</h1><h1 className='formHeading2'>Timer</h1>
        </div>
        <input id="dateInput" type="datetime-local" className='inputDate' onChange={handleChange}/>
        <button type='submit' className='formButton' >{timer?"Stop Timer":"Start Timer"}</button>
        <button type='button' className='formButton'onClick={handleCancel} >Cancel Timer</button>
      </form>
      <div>
        {completed?
         message && <p className='message'>{message}</p>
        :
        <Boxes target={dateAndTime}/>
        }
      </div>
        
    </div>
  )
}

export default From
