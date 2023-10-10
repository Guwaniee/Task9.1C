// Get modal elements
const loginModal = document.getElementById('loginModal');
const notificationModal = document.getElementById('notificationModal');

// Get button elements
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');
const okBtn = document.getElementById('okBtn');
const signOutBtn = document.getElementById('signOutBtn');

// Display the login modal when Login is clicked
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close the login modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Submit the login form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., validate email and password)

    // Show the notification modal on successful login
    notificationModal.style.display = 'block';
    loginModal.style.display = 'none';
});

// Close the notification modal when OK is clicked
okBtn.addEventListener('click', () => {
    notificationModal.style.display = 'none';

    // Show the Sign Out button after successful login
    signOutBtn.style.display = 'block';
});

// Show the Sign Out button when OK is clicked (if user is logged in)
if (localStorage.getItem('loggedIn') === 'true') {
    signOutBtn.style.display = 'block';
}

// Handle Sign Out button click
signOutBtn.addEventListener('click', () => {
    // Perform sign-out logic here (e.g., clear user session)

    // Hide the Sign Out button after sign-out
    signOutBtn.style.display = 'none';
    localStorage.setItem('loggedIn', 'false'); // Update user's login status
});
