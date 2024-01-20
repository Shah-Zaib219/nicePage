import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
const One = () => {
  return (
    <div className='two'>
      <h2>Insurance and investing for your many sides</h2>
      <p>We've been protecting people, businesses and futures for more than 90 years</p>
      <div className='subtwo'>
        <div className='subsubtwo'>
            <div className='subtwoimg'><span><FaUser /></span></div>
            <h3>For you and your family</h3>
            <p>We protect vehicles, property, pets and events.</p>
            <button className='btn'>Read More</button>
        </div>
        <div className='subsubtwo'>
            <div className='subtwoimg'><span><FaMobileScreenButton /></span></div>
            <h3>For your business</h3>
            <p>We protect businesses and employees, as well as company property and vehicles.</p>
            <button className='btn'>Read More</button>
        </div>
        <div className='subsubtwo'>
            <div className='subtwoimg'><span><HiOutlineLightBulb /></span></div>
            <h3>For your future</h3>
            <p>We protect investments, retirements and financial dreams.</p>
            <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default One;
