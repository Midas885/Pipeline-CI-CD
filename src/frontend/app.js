


fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('api-response').textContent = data.message;
  });