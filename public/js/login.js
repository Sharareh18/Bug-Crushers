const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      console.log('Response from server:', data);

      if (data.user) {
        alert('Successful login.'); //THIS IS WORKING
        window.location.href = "/";
      } else {
        console.error('Failed to log in:', data.message);
        alert('Failed to log in.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('Error during fetch. See console for details.');
    }
  }
};



const signupFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await response.json();

    console.log(data);
    
    if (response.ok) {
      window.location.pathname = "/register";
    } 
    else {
      alert('Email is already in use.');
    }
  }
};

console.log(document.querySelector('.login-form'));

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
});

