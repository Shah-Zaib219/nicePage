import React from 'react'

const Nine = () => {
  return (
    <div className='nine'>
      <div className='subnine1'>
        <h4>
        Ready to talk?
        </h4>
        <br/>
        <h2>Contact Us</h2>
        <br/>
        <p>Massa tempor nec feugiat nisl pretium fusce id velit. Accumsan tortor posuere ac ut. Aenean pharetra magna ac placerat vestibulum lectus. Praesent semper feugiat nibh sed pulvinar. Lorem sed risus ultricies tristique. </p>
        <br/>
        <p>
Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Amet dictum sit amet justo donec enim diam vulputate. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Volutpat lacus laoreet non curabitur.</p>
<br/>
      </div>
      <div className='subnine2'>
        <form>
            <input  className='text' type='text' reguired placeholder='Enter Your Name'></input><br/>
            <input className='text'  type='text' reguired placeholder='Enter a valid Email Address'></input><br/>
            <textarea  className='text' rows={4} placeholder='Enter Your message'></textarea>
            <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Nine
