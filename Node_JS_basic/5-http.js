const http = require('http'); // Import HTTP module
const fs = require('fs'); // Import File System module
/* eslint jest/require-hook: "off" */

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Route: Root endpoint "/"
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2]; // Get database file from command-line argument

    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        // Handle file read errors
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
        return;
      }

      // Process the CSV file to extract student data
      const rows = data.trim().split('\n').slice(1); // Skip the header row
      const students = rows.map((row) => row.split(',')[0]); // Get student names
      const csStudents = students.filter((_, index) => rows[index].includes('CS')); // CS students
      const sweStudents = students.filter((_, index) => rows[index].includes('SWE')); // SWE students

      // Build the response text
      const responseText = 'This is the list of our students\n'
        + `Number of students: ${students.length}\n`
        + `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`
        + `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;

      // Send the response
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(responseText);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
app.listen(1245);

module.exports = app; // Export the server for potential testing
