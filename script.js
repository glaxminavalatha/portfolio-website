fetch('http://localhost:5000/projects')
  .then(res => res.json())
  .then(data => {
    document.getElementById('projects').innerHTML =
      data.map(p => `<p>${p.title}</p>`).join('');
  });