const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

function matchesPage(pathname, sourceName) {
  const page = pathname.replace('/','');
  return page === sourceName || page === `${sourceName}.html`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (matchesPage(page, '') || matchesPage(page, 'index')) {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    return;
  }
  if (page === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const flip = getRandomInt(2) === 1 ? 'heads' : 'tails';
    const objToJson = {
        flip,
    }
    res.end(JSON.stringify(objToJson));
    return;
  }//else if
  if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    return;
  }
  if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
    return;
  }
  figlet('404!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    res.write(data);
    res.end();
  });
});

server.listen(8000);
