let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');



menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

// read more


const parentContainer = document.querySelector('.read-more-container');



if (parentContainer) {
    parentContainer.addEventListener('click', event => {

        const current = event.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn) return;

        const currentText = event.target.parentNode.querySelector('.read-more-text');

        currentText.classList.toggle('read-more-text--show');

        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
    });
}


// image scroll 

// Function to automatically switch between slides
function autoScroll() {
    // Get all the radio buttons
    const radioButtons = document.querySelectorAll('input[name="r"]');

    let currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        if(radioButtons && radioButtons[currentIndex]){
            radioButtons[currentIndex].checked = false;
            currentIndex = (currentIndex + 1) % radioButtons.length;
            radioButtons[currentIndex].checked = true;
        } 
    }

    // Auto-scroll interval (change the time interval as needed)
    const interval = setInterval(showNextSlide, 5000); // Change the time (in milliseconds)

    // Stop auto-scrolling when the user interacts with the slider
    const slider = document.querySelector('#slider');

    if(slider){
        slider.addEventListener('mouseover', () => {
            clearInterval(interval);
        });

         // Resume auto-scrolling when the user stops interacting with the slider
        slider.addEventListener('mouseout', () => {
            interval = setInterval(showNextSlide, 5000); // Change the time (in milliseconds)
        });
    }

   
}

// Call the autoScroll function when the page loads
window.onload = autoScroll;


