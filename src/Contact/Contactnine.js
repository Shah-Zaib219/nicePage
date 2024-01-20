import React from 'react'

const Contactnine = () => {
  return (
    <div className='contactnine'>
        <div className='contactsubnine1'></div>
        <div className='contactsubnine2'>
                <form>
        <input type='Email' placeholder='Enter a valid emial Address'/><br/>
                    <input type='text' placeholder='Enter your name'/>
                   <br/>
                    <textarea  className='text' rows={4} placeholder='Enter Your message'></textarea>
                    <br/>
                    <button className='btn8' >Submit</button>
                </form>
            </div>
      
    </div>
  )
}

export default Contactnine
