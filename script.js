// JavaScript for the login popup
const loginLink = document.getElementById('loginLink');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginLink.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// You can add more JavaScript functionality as needed.
