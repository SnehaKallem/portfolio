import React from 'react';

function Projects1() {
  return (
    <div className="container" style={{marginTop:'150px'}} id='projects1'>

      <center><h2  style={{ borderBottom: '1px solid black', paddingBottom: '0.5rem', display: 'inline-block', width: 'fit-content' }}>Projects</h2></center>
      <div className="row">
        <div className="col-md-6">
          <img src="digital.png" alt="Project 1" className="img-fluid" style={{width:'420px'}} />
        </div>
        <div className="col-md-6" style={{marginTop:'50px'}}>
        <h3>Digital Marketing Campaign</h3>
          <p>
            Implemented a comprehensive digital marketing campaign for a client in the e-commerce sector. The campaign included social media marketing, search engine optimization (SEO), and pay-per-click (PPC) advertising. 
          </p>
          
        </div>
      </div><br/>
      <div className="row">
        <div className="col-md-6">
          <img src="restaurant1.gif" alt="Project 2" className="img-fluid" style={{width:'420px'}} />
        </div>
        <div className="col-md-6">
        <h3>E-commerce Website</h3>
          <p>
            Developed and deployed an e-commerce website for a restaurant, enabling customers to browse the menu, place orders, and make online payments. Integrated with a backend system for order processing and inventory management.
          </p>
          <p>
            Implemented features such as user authentication, cart management, and order tracking. Designed a user-friendly interface with a focus on mobile responsiveness. The application resulted in a 25% increase in online orders and improved customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects1;
