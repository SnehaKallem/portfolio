// About.js
import React from 'react';

const About = () => {
    return (
        <div className="container" id='about' style={{marginTop:'80px'}}>
            <div className="row">
                
                <div className="col-md-8">
                    <h2>Sneha Kallem</h2>
                    <h5>Software Engineer</h5>
                    <p>
                        Experienced Full Stack Developer with a passion for building innovative web applications. 
                        Skilled in frontend and backend technologies, I aim to leverage my expertise to deliver 
                        high-quality solutions that meet client needs and drive business growth.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src="Sneha1.jpeg" alt="Profilepic" className="img-fluid"  style={{ maxWidth: '150px', maxHeight: '150px', width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
            </div>
        </div>
    );
};

export default About;
