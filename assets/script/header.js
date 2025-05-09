document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSidebarBtn');
    const sidebar = document.getElementById('sidebar');
  
    toggleButton.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  });
  