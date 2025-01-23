const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('./database.csv')
      .then(() => {
        res.end('This is the list of our students');
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
