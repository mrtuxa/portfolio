import React from 'react';

const Skills: React.FC = () => {
    const skills = ['NixOS', 'Freifunk', 'C++'];

    return (
        <section className="tech-skills">
            <h2>Tech Skills</h2>
            <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Linux</h3>
                        <p>I already used most of the common linux distributions in the desktop and also in the server
                            section</p>
                    </div>
                <div className="skill-card">
                    <h3>Network & WIFI-Mesh</h3>
                    <p>I already played around with OpenWRT and pfSense, also i installed networks for Freifunk Leipzig and administrating them.</p>
                </div>
                <div className="skill-card">
                    <h3>Kotlin/Java</h3>
                </div>
                <div className="skill-card">
                    <h3>C/C++</h3>
                </div>
                <div className="skill-card">
                    <h3>Nix</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;