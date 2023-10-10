// Function to handle the login process
function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the entered email and password match any user (add your logic here)
  if (email === 'guwanisd@gmail.com' && password === 'Sdgpc201@') {
      alert('Login successful!');
      
      // Hide the login form
      document.getElementById('login-form').style.display = 'none';

      // Show the "Sign Out" button
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

  // Show the login form again
  document.getElementById('login-form').style.display = 'block';

  // Hide the "Sign Out" button
  document.getElementById('sign-out-button').style.display = 'none';
});
