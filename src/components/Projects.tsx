import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        { name: 'Freifunk Contributions', description: 'Community networking initiatives and mesh network development' },
        { name: 'NixOS Configurations', description: 'Reproducible development environments and system configs' },
    ];

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;