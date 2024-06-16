// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate on scroll
    const elements = document.querySelectorAll('.main-content');
    const handleScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Dynamic project section
    const projects = [
        { title: 'Project One', description: 'Description for project one.' },
        { title: 'Project Two', description: 'Description for project two.' },
        { title: 'Project Three', description: 'Description for project three.' },
        { title: 'Project Four', description: 'Description for project four.' },
    ];

    const projectContainer = document.querySelector('.projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectContainer.appendChild(projectElement);
    });
});
