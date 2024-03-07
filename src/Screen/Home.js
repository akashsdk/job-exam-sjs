import React from 'react';
import Index from '../Components/Index';
import AboutMe from '../Components/AboutMe';
import MySkills from '../Components/MySkills';
import MyProject from '../Components/MyProject';
import Contact from '../Components/Contact';

export default function Home() {
  return (
    <div className=''>
      <Index/>
      <AboutMe/>
      <MySkills/>
      <MyProject/>
      <Contact/>
    </div>
  )
}
