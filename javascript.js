// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navigation a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const href = link.getAttribute("href");
            
            if (href.startsWith("#")) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offset = targetElement.offsetTop - 50; // Adjust the offset as needed
                    window.scrollTo({
                        top: offset,
                        behavior: "smooth"
                    });
                }
            } else {
                window.location.href = href;
            }
        });
    });
});

