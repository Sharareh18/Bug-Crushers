const logout = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  console.log(data);
  if (response.ok) {
    window.location.href = "/";
  } else {
    alert('Failed to log out.');
  }
};


document.querySelector('#logout').addEventListener('click', logout);