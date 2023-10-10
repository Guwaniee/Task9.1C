// Function to handle the login process
function handleLogin() {
  // Add login logic here (e.g., validate email and password)
  // For this example, I'll simulate a successful login
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // You can replace this condition with your actual login logic
  if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
      
      // Hide the login form
      document.getElementById('login-form').style.display = 'none';

      // Show the "Sign Out" button in the navigation bar
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
