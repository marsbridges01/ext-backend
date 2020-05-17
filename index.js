const http = require('http');
const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

app.post('/hyou', (req, res) => {
  const vUrl = req.body.vUrl;

  if (shell.exec('youtube-dl --download-archive video.mp3 --format mp3 ' + vUrl).code !== 0) {
    console.log('done.');
  }
});

server.listen(1996, () => {
  console.log('http server listening on port 1996');
});
