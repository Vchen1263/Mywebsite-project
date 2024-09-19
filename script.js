function openTab(event, tabId) {
    // Hide all tab-content divs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove 'active' class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab-content div
    document.getElementById(tabId).style.display = 'block';

    // Add 'active' class to the clicked button
    event.currentTarget.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        let slides = document.querySelectorAll('.mySlides');
        let dots = document.querySelectorAll('.dot');
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        slides.forEach(slide => slide.style.display = 'none');  
        dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
        
        slides[slideIndex - 1].style.display = 'block';  
        dots[slideIndex - 1].className += ' active';
    }

    // Automatic slide transition
    function autoSlide() {
        slideIndex++;
        showSlides(slideIndex);
        setTimeout(autoSlide, 3000); // Change image every 3 seconds
    }

    autoSlide(); // Start automatic sliding

    // Optional functions for manual navigation
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    let currentInfoBox = null;

    // Function to show an info box
    function showInfo(id) {
        if (currentInfoBox && currentInfoBox !== id) {
            // Hide the currently visible info box
            document.getElementById(currentInfoBox).style.display = 'none';
        }
        // Show the selected info box
        document.getElementById(id).style.display = 'block';
        currentInfoBox = id;
    }
    
    // Function to close an info box
    function closeInfo(id) {
        document.getElementById(id).style.display = 'none';
        if (currentInfoBox === id) {
            currentInfoBox = null;
        }
    }
    
    // Add event listeners to icons to show info boxes and hide other info boxes
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const infoBoxId = this.querySelector('.info-box').id;
            showInfo(infoBoxId);
        });
    });
    
    // Close the info box when clicking outside of it
    document.addEventListener('click', function(event) {
        if (currentInfoBox && !event.target.closest('.info-box') && !event.target.closest('.icon')) {
            closeInfo(currentInfoBox);
        }
});
 // Product Sorting by `data-added`
 const shopPage = document.getElementById('shop-page');
 const productBoxes = Array.from(shopPage.getElementsByClassName('product-box'));

 // Sort the products by the `data-added` attribute in descending order
 productBoxes.sort((a, b) => {
     return new Date(b.getAttribute('data-added')) - new Date(a.getAttribute('data-added'));
 });

 // Append the sorted product boxes back to the shop-page div
 productBoxes.forEach(product => {
     shopPage.appendChild(product);
 });
});