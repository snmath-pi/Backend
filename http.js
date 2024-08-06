const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Here is about page');
    } else {
        res.statusCode = 404; // Set the response status code to 404
        res.end(`<h1>Oops!</h1> 
            <p>We can't seem to find the page you're looking for</p>
            <a href='/'>back home</a>`);
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
