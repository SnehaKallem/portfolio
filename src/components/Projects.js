// Projects.js
import React from 'react';

const projects = [
    {
        title: 'Digital Marketing',
        role: 'Full Stack Developer',
        technologies: 'Python, Django, MySQL',
        description: 'Developed a web application for managing digital marketing campaigns. Implemented frontend using React and backend using Node.js. Integrated MySQL database for storing campaign data.'
    },
    {
        title: 'Ecommerce Platform',
        role: 'Full Stack Developer',
        technologies: 'React.js, Node.js, MySQL',
        description: 'Designed and developed an ecommerce platform from scratch. Built frontend components using React and implemented backend services using Node.js. Integrated MySQL database for product and order management.'
    },
    // Add more projects as needed
];


const Projects = () => {
    return (
        <div className="container" id='projects'>
            <h2 style={{backgroundColor:'darkslategray' , color:'white'}}>Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card mb-4">
                            {/* <img src={project.image} className="card-img-top" alt={project.title} /> */}
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.role}</p>
                                <p className="card-text"><strong>Technologies Used:</strong> {project.technologies}</p>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
