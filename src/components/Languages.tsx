import React from 'react';

const Languages: React.FC = () => {
    const projects = [
        {name: "German", description: "C2", grade: "native speaker"},
        {name: "Englisch", description: "B1", grade: "first foreign language"},
        {name: "French", description: "A1", grade: "foreign language"},
        {name: "Dutch", description: "A1", grade: "self-study"},
    ];
    return (
        <section className="languages">
            <h2>Languages</h2>
            <div className="languages-list skills-grid">
                {projects.map((project, index) => (
                    <div className="language-card skill-card" key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.grade} {project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Languages;