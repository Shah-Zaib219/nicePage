import React from 'react'
import Nav from './Nav';
import One from './One';
import Two from './Two';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
const Home = () => {
  return (
    <div>
      <>
      <style>
        {`
          body {
            background-color: black;
            color: white;
          }
        `}
      </style>
      <Nav/>
    <One/>
    <Two/>
    <Four/>
    <Five/>
    <Six/>
    <Seven/>
    <Eight/>
    <Nine/>
    <Ten/>
    </>
    </div>
  )
}

export default Home
