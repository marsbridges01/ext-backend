const http = require('http');
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const server = http.createServer(app);
const port = 80;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/hyou', (req, res) => {
  const vUrl = req.body.vUrl;

  console.log(vUrl);

  if (shell.exec('youtube-dl --download-archive video.mp3 --format mp3 ' + vUrl).code !== 0) {
    console.log('done.');
  }
});

server.listen(port, () => {
  console.log('http server listening on port ' + port);
});
