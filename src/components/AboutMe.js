import React from 'react';
import './aboutme.css'
import { Button } from '@mui/material';
import About1 from './About1';
function AboutMe() {
  return (
      <section className="text-center" style={{ marginTop: '150px' }} >
      <h2 style={{ borderBottom: '1px solid black', paddingBottom: '0.5rem', display: 'inline-block', width: 'fit-content' }} id='aboutme'>ABOUT ME</h2>
      
      <p className='heading-sec__sub'>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
       <br/> Feel free to explore and get to know me better!
      </p>

      <div className="container mt-5">
        <div className="row">
        <div className="col-md-6" style={{ textAlign: 'justify' }}>
        <h3>Get to know me!</h3>
        <p>
          I'm a Full Stack Developer with a strong focus on Frontend & Backend Technologies. <br/>Check out some of my work in the Projects section.
        </p>
        
        <p>
          I'm currently open to job opportunities where I can contribute, learn, and grow.<br/> If you have a good opportunity that matches my skills and experience.
        </p>
{/* 
        <Button variant="contained" color="secondary" href="#contact" style={{ marginTop: '1rem',width:'150px' }}>
        Contact
      </Button> */}
      </div>


          <div className="col-md-6">
            
            <h3>
              My Skills:
            </h3>
            <div style={{    display: 'flex',flexWrap: 'wrap'}} >
              <div className='skill'>HTML</div>
              <div className='skill'>CSS</div>
              <div className='skill'>Mysql</div>
              <div className='skill'>Git</div>
              <div className='skill'>Python</div>
              <div className='skill'>Django</div>
              <div className='skill'>ReactJs</div>
              <div className='skill'>NodeJs</div>
              <div className='skill'>MongoDB</div>
              <div className='skill'>Bootstrap</div>
              <div className='skill'>Javascript</div>
              <div className='skill'>Visual Studio</div>
              
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
