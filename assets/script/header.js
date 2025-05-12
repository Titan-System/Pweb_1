document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.header-top_h');
  
    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        header.classList.toggle('open');
    });
  });
  
