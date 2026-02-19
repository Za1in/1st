'use strict';

// Blog Posts Logic
const blogPosts = [];

function addBlogPost(title, content) {
    const post = { title, content, date: new Date().toISOString() };
    blogPosts.push(post);
    savePostsToLocalStorage();
}

function savePostsToLocalStorage() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function loadPostsFromLocalStorage() {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
        blogPosts.push(...JSON.parse(storedPosts));
    }
}

// Projects Gallery Logic
const projects = [];

function addProject(name, description, imageUrl) {
    const project = { name, description, imageUrl };
    projects.push(project);
    saveProjectsToLocalStorage();
}

function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        projects.push(...JSON.parse(storedProjects));
    }
}

// Initialize blog posts and projects on page load
window.onload = function () {
    loadPostsFromLocalStorage();
    loadProjectsFromLocalStorage();
    // ... additional logic to render posts and projects on the page
};
