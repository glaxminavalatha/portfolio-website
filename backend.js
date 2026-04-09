const express = require('express');
const app = express();

app.get('/projects', (req, res) => {
  res.json([
    { title: "Portfolio Website" },
    { title: "Student Database Project" }
  ]);
});

app.listen(5000, () => console.log("Server running on port 5000"));