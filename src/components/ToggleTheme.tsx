import React from 'react';

const ToggleTheme: React.FC = () => {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            Toggle Dark Mode
        </button>
    );
};

export default ToggleTheme;