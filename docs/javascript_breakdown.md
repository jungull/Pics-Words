# JavaScript Code Breakdown

This document explains the functionality of the `script.js` file used in the "Pictures & Words" website.

## 1. Hamburger Menu Toggle
**Function:** `toggleMenu()`
**Lines:** 6-15

This function controls the mobile navigation menu.
- It finds the navigation links element (`navLinks`).
- It checks if the menu is currently visible (`display: block`).
- If visible, it hides it; if hidden, it shows it.
- This allows users on small screens to open and close the menu.

```javascript
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
```

## 2. Image Shuffler
**Function:** `shuffleImage()`
**Lines:** 18-79

This function displays a random image on the homepage.
- **`images` Array:** Contains a list of file paths to all the images available for shuffling.
- **Random Selection:** `Math.random()` picks a random number, which is used to select an image from the list.
- **Display:** It updates the `src` attribute of the `shuffleImageDisplay` image tag to show the new picture.

## 3. Book Quotes Data
**Variable:** `bookQuotes`
**Lines:** 82-136

This is a **data object** that stores lists of quotes for each book.
- The keys (e.g., `'brothers-k'`, `'east-of-eden'`) match the IDs used in the HTML.
- The values are arrays of strings, where each string is a quote.

## 4. Book Quote Shuffler
**Function:** `shuffleBookQuote(bookId)`
**Lines:** 139-148

This function changes the quote displayed for a specific book on the "Words" page.
- **Input:** Takes `bookId` as an argument to know which book to update.
- **Logic:** Looks up the quotes for that book in the `bookQuotes` object, picks a random one, and updates the text on the page.

## 5. Homepage Quote Shuffler
**Function:** `shuffleQuote()`
**Lines:** 151-167

This function displays a random quote from *any* book on the homepage.
- It combines all the quotes from every book into one big list (`allQuotes`).
- It picks one random quote from that master list and displays it.

## 6. Form Handling
**Function:** `handleFormSubmit()`
**Lines:** 170-205

This function runs when the user submits the contact form.
- **Input Retrieval:** It checks which radio button was selected or what value was chosen in the dropdown.
- **Response Logic:** It sets a custom message (`formResponse`) based on the user's choice (e.g., "Thanks for recommending a book!").
- **Display:** It reveals the hidden response message to the user.

## 7. Active Navigation Highlighting
**Function:** `highlightActiveNav()`
**Lines:** 208-220

This function ensures the correct menu item is underlined based on the page you are currently visiting.
- It gets the current page filename (e.g., `about.html`).
- It loops through all navigation links.
- If a link matches the current page, it adds the class `active` (which adds the underline style).

## 8. Initialization
**Event Listener:** `DOMContentLoaded`
**Lines:** 223-225

This code waits for the entire webpage to finish loading before running any scripts.
- It calls `highlightActiveNav()` immediately so the menu is correct as soon as the page appears.
