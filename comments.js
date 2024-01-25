// Create web server

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    res.send(comments);
  });
});

app.post('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
      if (err) throw err;
      res.send(comments);
    });
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});