import React from 'react'
import { FaUser } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { MdBusinessCenter } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
const Contacteight = () => {
  return (
    <div className='contacteight'>
      <div className="contactsubeight">
        <div className='contactsubeight1'>
            <div>
           <span><FaUser /></span>
        </div></div>
        <h2>16</h2>
        <p>SPECIALISTS</p>
      </div>
      <div className="contactsubeight">
        <div className='contactsubeight1'>
            <div>
           <span><TiGroup /></span>
        </div></div>
        <h2>456</h2>
        <p>HAPPY<br/>CLIENTS</p>
      </div>
      <div className="contactsubeight">
        <div className='contactsubeight1'>
            <div>
          <span><MdBusinessCenter /></span>
        </div></div>
        <h2>23</h2>
        <p>SUCCESSFUL<br/>CASES</p>
      </div>
      <div className="contactsubeight">
        <div className='contactsubeight1'>
            <div>
            <span><FaTrophy /></span>
        </div></div>
        <h2>12</h2>
        <p>SPECIALISTS</p>
      </div>
    </div>
  )
}

export default Contacteight
