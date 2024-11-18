import React from 'react';

const Skills: React.FC = () => {
    const skills = ['NixOS', 'Freifunk', 'C++'];

    return (
        <section className="tech-skills">
            <h2>Tech Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{skill}</h3>
                        <p>Advanced configuration and system management</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;