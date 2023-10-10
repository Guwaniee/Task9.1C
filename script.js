// Create an array to store user credentials (email and password)
const users = [
  { email: 'user@example.com', password: 'password' }
];

// Function to handle the login process
function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the entered email and password match any user
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
      alert('Login successful!');
      
      // Hide the login form
      document.getElementById('login-form').style.display = 'none';

      // Show the "Sign Out" button in the navigation bar
      document.getElementById('sign-out-button').style.display = 'inline';
  } else {
      alert('Login failed. Please check your credentials.');
  }
}

// Function to handle the sign-up process
function handleSignUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the entered email already exists in the user array
  const userExists = users.some(user => user.email === email);

  if (!userExists) {
      // Add the new user to the users array (for simplicity, we're not doing server-side validation)
      users.push({ email, password });

      alert('Sign-up successful! You can now log in.');

      // Clear the email and password fields
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
  } else {
      alert('Sign-up failed. This email is already registered.');
  }
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  handleLogin();
});

document.getElementById('sign-out-button').addEventListener('click', function() {
  // Add sign-out logic here
  alert('You have been signed out.');
  // You can also add code to hide the "Sign Out" button after signing out.
});

document.getElementById('sign-up-button').addEventListener('click', function() {
  handleSignUp();
});
