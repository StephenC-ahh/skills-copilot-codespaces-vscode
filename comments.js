// Create web server
// localhost:3000/comments
// localhost:3000/comments/1
// localhost:3000/comments/2
// localhost:3000/comments/3

// 1. Create web server
// 2. Create route
// 3. Create controller
// 4. Create view

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route
// 3. Create controller
// 4. Create view
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('home');
});

app.get('/comments', (req, res) => {
    // res.send('Hello World!');
    res.render('comments/index');
});

app.get('/comments/:id', (req, res) => {
    // res.send('Hello World!');
    res.render('comments/view');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});