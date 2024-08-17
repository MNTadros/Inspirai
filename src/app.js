document.getElementById('hamburger').addEventListener('click', function() {
    const sidebar = document.getElementById('hamburger-menu');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar.classList.contains('sidebar-closed')) {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
        mainContent.classList.add('shifted');
    } else {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
        mainContent.classList.remove('shifted');
    }
});
