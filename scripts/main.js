// Handlebars Script - Every Page Requires.. //
// Function to load and render a template   //
    function loadTemplate(id, url, target, callback) {
        fetch(url)
            .then(response => response.text())
            .then(templateSource => {
                const template = Handlebars.compile(templateSource);
                const html = template();
                document.getElementById(target).innerHTML = html;
                if (callback) callback();  // Call the callback function if provided
            })
            .catch(error => console.error('Error loading template:', error));
    }

    // Load the header and footer templates, then set the year
    loadTemplate('header-template', '../header.html', 'header-container');
    loadTemplate('footer-template', '../footer.html', 'footer-container', function () {
        document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Popovers Script - Every Page Requires.. //
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        var popover = new bootstrap.Popover(popoverTriggerEl, {
            html: true,  // Enable HTML content in popovers
            trigger: 'click'  // Trigger popover on click
        });

        // Close the popover when clicking anywhere else on the page
        document.addEventListener('click', function (e) {
            if (!popoverTriggerEl.contains(e.target)) {
                popover.hide();
            }
        });

        return popover;
    });
});

// Tooltips Script //
// Initialize Bootstrap tooltips //
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

        // Show tooltip on hover
        tooltipTriggerEl.addEventListener('mouseenter', function () {
            tooltip.show();

            // Automatically hide the tooltip after 7.2 seconds
            setTimeout(function () {
                tooltip.hide();
            }, 7200);
        });

        // Hide the tooltip when mouse leaves the element
        tooltipTriggerEl.addEventListener('mouseleave', function () {
            tooltip.hide();
        });

        // Hide the tooltip on click anywhere in the document
        document.addEventListener('click', function () {
            tooltip.hide();
        });

        return tooltip;
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // Check the scroll position and show/hide the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll smoothly to the top of the document
function scrollToTop() {
  // Use the scrollTo method with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
