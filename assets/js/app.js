document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    // Toggle sidebar
    sidebarCollapse.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('expanded');
    });

    // Mobile close sidebar when clicking outside
    if (window.innerWidth < 768) {
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !sidebarCollapse.contains(e.target)) {
                sidebar.classList.add('collapsed');
                content.classList.add('expanded');
            }
        });
    }

    // Store sidebar state
    window.addEventListener('unload', function() {
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });

    // Restore sidebar state
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    }
});