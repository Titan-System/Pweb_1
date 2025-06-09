document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.header-top_h');
  
    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        header.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
        if (e.target.id === 'darkModeToggle') {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        }
    });
  });

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
  
