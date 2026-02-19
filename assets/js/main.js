// main.js

// LocalStorage functions for blog posts and projects
function savePost(key, post) {
    localStorage.setItem(key, JSON.stringify(post));
}

function getPost(key) {
    const post = localStorage.getItem(key);
    return post ? JSON.parse(post) : null;
}

// Dynamic grid rendering
function renderGrid(items) {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = ''; // Clear previous content
    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerText = item;
        gridContainer.appendChild(gridItem);
    });
}

// WhatsApp/Call button functionality
function setupContactButtons() {
    const whatsAppButton = document.getElementById('whatsapp-button');
    const callButton = document.getElementById('call-button');

    whatsAppButton.addEventListener('click', function() {
        window.open('https://wa.me/your_number', '_blank'); // Replace your_number with your actual number
    });

    callButton.addEventListener('click', function() {
        window.open('tel:your_number'); // Replace your_number with your actual number
    });
}

// Smooth scroll effect
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header shadow on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});
