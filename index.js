const http = require('http');
const app = require('express')();

const server = http.createServer(app);

app.get('/hyou-corazon', (req, res) => {
  res.send('<3');
});

server.listen(1996, () => {
  console.log('http server listening on port 1996');
});
