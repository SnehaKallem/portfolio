import { maxWidth } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { Button } from '@mui/material';

function About1() {
  return (
    <><div id='about1'><section className="text-center " style={{ marginTop: '150px' }}>

      <h1 style={{ letterSpacing: '3px', fontWeight: 800, fontSize: '2rem' }}>HEY, I'M SNEHA KALLEM</h1>
      <div style={{ margin: '3rem auto 0 auto', maxWidth: '80rem' }}>
        <p>
          A Full Stack Developer with a passion for building innovative web applications.<br />
          Skilled in frontend and backend technologies, I aim to leverage my expertise to deliver
          high-quality solutions that meet client needs and drive business growth.
        </p>

      </div>
      <div style={{ marginTop: '5rem', }}>
        <Button variant="contained" color="secondary" href="#projects1" style={{ marginTop: '1rem', width: '150px' }}>
          Projects
        </Button>
      </div>


      <div>

      </div>

    </section></div></>
  );
}

export default About1;
