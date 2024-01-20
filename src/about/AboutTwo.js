import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const AboutTwo = () => {
  return (
    <div className='abouttwo'>
        <div className='subabouttwo1'>
            <h2>Recruitment <span>Agency</span></h2>
            <p>Recruitment Agency that strives to help businesses put together a staff of highly efficient and skilled professionals, and also serve employees by opening up new vistas of job opportunities for them. We take pride in lending our hand in creating the kind of professional environment that would fulf​ill the mission and vision that enterprises are built upon.

</p>
        </div>
        <div className='subabouttwo2'>
            <div className='subabouttwo21'>
                <div className='flex'>
                <div className='subabouttwo21img'><FaMobileAlt className='icon'/></div>
                <div className='subabouttwo21txt'>
                    <h4>Project Based Recruitment</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                </div>
                <div className='flex'>
                <div className='subabouttwo21img'><IoSettings className='icon'/></div>
                <div className='subabouttwo21txt'>
                    <h4>RPO Services</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                </div>
            </div>
            <div className='subabouttwo21'>
                <div className='flex'>
                <div className='subabouttwo21img'><IoDocumentTextSharp className='icon'/></div>
                <div className='subabouttwo21txt'>
                    <h4>Overseas Recruitment Agency</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                </div>
                <div className='flex'>
                <div className='subabouttwo21img'><FaUser className='icon'/></div>
                <div className='subabouttwo21txt'>
                    <h4>Expat Recruitment</h4>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutTwo
