// Skills.js
import React from 'react';

const Skills = () => {
    return (
        <div className="container" id='skills'>
            <h2 style={{ backgroundColor:'darkslategray', padding: '6px' , color:'white'}}>Skills</h2>

            <div className="row">
                <div className="col-md-3 text-center">
                    <img src="python.jpg" alt="Python" className="img-fluid" style={{ width: '120px' }} />
                    <p>Python</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="reactjs.png" alt="ReactJs" className="img-fluid" style={{ width: '190px' }} />
                    <p>ReactJs</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="html.png" alt="HTML" className="img-fluid" style={{ width: '120px' }} />
                    <p>HTML</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="css.png" alt="CSS" className="img-fluid" style={{ width: '120px' }} />
                    <p>CSS</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 text-center">
                    <img src="django.png" alt="Django" className="img-fluid" style={{ width: '120px' }} />
                    <p>Django</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="nodejs1.png" alt="NodeJs" className="img-fluid" style={{ width: '150px' }} />
                    <p>NodeJs</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="mysql.png" alt="Mysql" className="img-fluid" style={{ width: '120px' }} />
                    <p>Mysql</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="bootstrap.png" alt="Bootstrap" className="img-fluid" style={{ width: '120px' }} />
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 text-center">
                    <img src="javascript.png" alt="Python" className="img-fluid" style={{ width: '120px' }} />
                    <p>Javascript</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="git.png" alt="ReactJs.png" className="img-fluid" style={{ width: '120px' }} />
                    <p>Git</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="jquery.png" alt="HTML" className="img-fluid" style={{ width: '120px' }} />
                    <p>jquery</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="mongodb.png" alt="CSS" className="img-fluid" style={{ width: '120px' }} />
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
