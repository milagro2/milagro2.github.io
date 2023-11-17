window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const toggleNavButton = document.getElementById("toggleNav");
    const navList = document.querySelector("#navbar ul");

    toggleNavButton.addEventListener("click", function () {
        navList.style.display = (navList.style.display === "flex" || navList.style.display === "") ? "none" : "flex";
    });
});



const text = "WELCOME!";
const container = document.getElementById('cool');

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.setProperty('--i', i + 1);
    container.appendChild(span);
}



// todo list line
const todoList = document.getElementById('todo-list');
todoList.addEventListener('change', function (event) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = 'none';
    }
});


