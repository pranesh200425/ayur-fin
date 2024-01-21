const viewModalBtn = document.querySelectorAll(".view-details");
const modalClosebtn = document.querySelectorAll(".close-btn");
const menuIcon = document.querySelector(".menu-icon");
const modalContainer = document.querySelector(".product-view-modal");



let isModalvis = false;

const modOpenClose = () => {
    let modal = document.querySelector(".product-view-modal");
    if (isModalvis === false) {
        modal.classList.add("active");
        isModalvis = true;
    } else {
        modal.classList.remove("active");
        isModalvis = false;
    }
}

const openMenu = () => {
    let bars = document.querySelector(".fa-bars")
    let menu = document.querySelector(".nav .transparent .nav-items");
    menu.classList.toggle('show');
    bars.classList.toggle("fa-xmark")
    console.log("works");
}

viewModalBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        var targetElementId = button.getAttribute('data-target');
        var targetElement = document.getElementById(targetElementId);
        if (!isModalvis) {
            targetElement.classList.add("active");
            isModalvis = true;
        }
    });
});

const closemodal = () => {
    if (isModalvis) {
        modalContainer.classList.remove("active");
        isModalvis = false;
    }
}


modalClosebtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let parent = event.target.parentNode;
        let real = parent.parentNode;
        let prodmod = real.parentNode;
        prodmod.classList.remove("active")
        isModalvis = false;
    });
});

menuIcon.addEventListener("click", openMenu)