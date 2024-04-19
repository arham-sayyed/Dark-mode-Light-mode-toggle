/**
 * Toggle between dark and light mode.
 * The function first initializes the toggle button and body elements.
 * It then defines three functions: enableDarkMode, disableDarkMode, and systemPrefersDark.
 * The last three lines of code check the user's preference for dark mode,
 * and apply the appropriate mode using the enableDarkMode or disableDarkMode function.
 * Finally, an event listener is added to the toggle button, so that the mode can be toggled onClick.
 */

// Initialize variables
const toggleBtn = document.getElementById('toggle-btn'); // Get the toggle button element
const body = document.body; // Get the body element
let darkMode = localStorage.getItem('dark-mode'); // Get the user's current mode from local storage

/**
 * Enable dark mode by adding the 'dark' class to the body and updating the mode in local storage.
 */
function enableDarkMode() {
    toggleBtn.classList.replace('fa-sun', 'fa-moon'); // Replace the class of the toggle button to 'fa-moon'
    body.classList.add('dark'); // Add the 'dark' class to the body
    darkMode = 'enabled'; // Update the mode in local storage to 'enabled'
    localStorage.setItem('dark-mode', darkMode); // Save the mode to local storage
}

/**
 * Disable dark mode by removing the 'dark' class from the body and updating the mode in local storage.
 */
function disableDarkMode() {
    toggleBtn.classList.replace('fa-moon', 'fa-sun'); // Replace the class of the toggle button to 'fa-sun'
    body.classList.remove('dark'); // Remove the 'dark' class from the body
    darkMode = 'disabled'; // Update the mode in local storage to 'disabled'
    localStorage.setItem('dark-mode', darkMode); // Save the mode to local storage
}

/**
 * Check if the user's system prefers dark mode.
 * @returns {string} The mode, either 'enabled' or 'disabled'.
 */
function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'enabled' : 'disabled';
}

// Check the user's preference for dark mode and apply the appropriate mode
darkMode = darkMode || systemPrefersDark(); // If darkMode is not set, check if the system prefers dark mode and set it accordingly
darkMode === 'enabled' ? enableDarkMode() : disableDarkMode(); // Apply the appropriate mode for static loads like on page load or refresh

// Add an event listener to toggle the mode on click
toggleBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode'); // Get the user's current mode from local storage
    darkMode === 'disabled' ? enableDarkMode() : disableDarkMode(); // Toggle the mode
});
