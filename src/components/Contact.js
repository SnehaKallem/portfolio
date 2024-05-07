import React from 'react';

const Contact = () => {
    return (
        <div className="container" id='contact' style={{marginTop:'150px'}}>
            {/* <h2 style={{backgroundColor:'darkslategray', color:'white'}}>Contact Me</h2> */}
            <center><h2  style={{ borderBottom: '1px solid black', paddingBottom: '0.5rem', display: 'inline-block', width: 'fit-content' }}>Contact</h2></center>
           <center> <p style={{display: 'inline-block', marginRight: '1rem'}}>Mobile: +91 9182147219</p>
            <p style={{display: 'inline-block'}}>Email: snehakallem9@gmail.com</p></center>
        </div>
    );
};

export default Contact;
