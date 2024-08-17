document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('hamburger-menu').classList.toggle('sidebar-open');
    document.getElementById('hamburger-menu').classList.toggle('sidebar-closed');
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('hamburger-menu').classList.toggle('sidebar-open');
    document.getElementById('hamburger-menu').classList.toggle('sidebar-closed');
});
