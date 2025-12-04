/* John Gallagher
   Pictures & Words - Script.js
   11/24/2025 */

// Hamburger menu
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
        navLinks.className = 'nav-links';
    } else {
        navLinks.style.display = 'block';
        navLinks.className = 'nav-links active';
    }
}

// Split Screen
function expandPane(paneId) {
    var picturesPane = document.getElementById('pictures-pane');
    var wordsPane = document.getElementById('words-pane');

    if (!picturesPane || !wordsPane) return;

    // If the clicked pane is already active, do nothing
    if (paneId === 'pictures' && picturesPane.classList.contains('active')) return;
    if (paneId === 'words' && wordsPane.classList.contains('active')) return;

    // Reset classes
    picturesPane.classList.remove('active', 'inactive', 'collapsed');
    wordsPane.classList.remove('active', 'inactive', 'collapsed');

    if (paneId === 'pictures') {
        picturesPane.classList.add('active');
        wordsPane.classList.add('inactive');
    } else if (paneId === 'words') {
        wordsPane.classList.add('active');
        picturesPane.classList.add('inactive');
    }
}



// Form 
function handleFormSubmit() {
    var formResponse = document.getElementById('formResponse');
    var selectedValue = '';

    // Check for radio buttons
    var radios = document.getElementsByName('contactReason');
    if (radios.length > 0) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }
    }

    // Display response based on selection
    if (selectedValue === 'recommendation') {
        formResponse.innerHTML = 'Thanks for reccomonding a book!';
    } else if (selectedValue === 'quote') {
        formResponse.innerHTML = 'Thanks for submitting a quote!';
    } else if (selectedValue === 'photoshoot') {
        formResponse.innerHTML = 'I will reach out within 48 hours to discuss the details';
    } else if (selectedValue === 'other') {
        formResponse.innerHTML = 'Thanks for visiting my site, looking forward to reading your message!.';
    } else {
        formResponse.innerHTML = 'Thanks for your message!';
    }

    formResponse.style.display = 'block';
    return false;
}
