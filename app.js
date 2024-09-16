const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const getLocalIP = require('./ip');


const interfaceip = getLocalIP();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, `${interfaceip}`, () => {
    console.log(`Server running at http://${interfaceip}:${port}`);
});