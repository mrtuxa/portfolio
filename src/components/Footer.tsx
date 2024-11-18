import React from 'react';
import Mastodon from '../icons/Mastodon'
import Github from "../icons/Github";


const Footer: React.FC = () => {
    return (
        <footer className="portfolio-footer">
            <div className="social-links">
                <a href="https://github.com/mrtuxa" target="_blank" rel="noopener noreferrer">
                    <Github size={60} color="#fff" /> {/* GitHub Icon */}
                </a>
                <a href="https://zug.network/@mrtuxa" target="_blank" rel="noopener noreferrer">
                    <Mastodon size={24} color="#fff" /> {/* Mastodon Icon */}
                </a>
            </div>
            <p>Made with 💖 by a proud transgirl in tech</p>
        </footer>
    );
};

export default Footer;