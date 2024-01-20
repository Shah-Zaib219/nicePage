import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Abouteight = () => {
  return (
    <div className='abouteight'>
        <div className='aboutsubeight1'>
            <div className='aboutsubeight12 sb81'><span><FaLocationDot /></span>
            <h3>OUR MAIN OFFICE</h3>
            <p>SoHo 94 Broadway St New York, NY 1001</p>
            </div>
            <div className='aboutsubeight12 sb81'><span><FaPhone /></span>
            <h3>PHONE NUMBER</h3>
            <p>234-9876-5400
888-0123-4567 (Toll Free)</p>
            </div>
            <div className='aboutsubeight12 sb81'><span><FaFax /></span>
            <h3>FAX</h3>
            <p>1-234-567-8900</p>
            </div>
            <div className='aboutsubeight12 sb81'><span><MdEmail /></span>
            <h3>EMAIL</h3>
            <p><a href='/'>hello@theme.com</a></p>
            </div>
        </div>
        <div className='aboutsubeight2'>
            <div className='aboutsubeight21'>
                <h2>Contact <span>Info</span></h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d9515bad608c524b85386109/pexels-photo-1105766.jpeg' alt=''/>
            </div>
            <div className='aboutsubeight22'>
                <form>
                <label>Email</label><br/>
        <input type='Email' placeholder='Enter a valid emial Address'/> 
                   <br/> <label>Name</label><br/>
                    <input type='text' placeholder='Enter your name'/>
                   <br/> <label>Message</label><br/>
                    <textarea  className='text' rows={4} placeholder='Enter Your message'></textarea>
                    <br/>
                    <button className='btn8' >Submit</button>
                </form>
            </div>

            
        </div>
      
    </div>
  )
}

export default Abouteight
