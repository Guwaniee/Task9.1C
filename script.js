// Create an array to store user credentials (email and password)
const users = [
  { email: 'guwanisd@gmail.com', password: 'Sdgpc201@' }
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

      // Show the "Sign Out" button inside the login form
      document.getElementById('sign-out-button').style.display = 'inline';
  } else {
      alert('Login failed. Please check your credentials.');
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
