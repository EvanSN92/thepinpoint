document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle Dropdowns on Mobile
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.drop-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');

        trigger.addEventListener('click', (e) => {
            // Only apply click logic on mobile (window width < 768px)
            if (window.innerWidth < 768) {
                e.preventDefault(); // Prevent link jump
                menu.classList.toggle('active');
                
                // Optional: Rotate the arrow icon if you want to add that CSS later
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Get the button and body
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    // 2. Check if the user already has a preference saved
    // If they visited before and turned it on, apply it immediately
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Change icon to sun
    }

    // 3. Listen for the click
    toggleBtn.addEventListener('click', () => {
        
        // Toggle the class
        body.classList.toggle('dark-mode');

        // Check if dark mode is now ON or OFF
        if (body.classList.contains('dark-mode')) {
            // It's ON: Save preference and switch icon
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // It's OFF: Save preference and switch icon
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // --- (Your existing Mobile Menu code goes below here) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    // ... rest of your mobile menu code
});