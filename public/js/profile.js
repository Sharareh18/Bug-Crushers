const newUserProfile = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const bio = document.querySelector('#bio').value.trim();
    const stepcount = document.querySelector('#step-count').value.trim();
    const image = document.querySelector('#image').value.trim() || 'default-image.jpg';
  
    if (name && bio) {
      const response = await fetch(`/api/profile`, {
        method: 'POST',
        body: JSON.stringify({ name, bio, stepcount, image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create profile');
      }
    }
  };
  
  document
    .querySelector('.new-profile-form')
    .addEventListener('submit', newUserProfile);