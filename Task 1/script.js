const projects = document.querySelectorAll('.project');

const reveal = () => {
  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      project.classList.remove('blur');
    }
  });
};

window.addEventListener('scroll', reveal);

