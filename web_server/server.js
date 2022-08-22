const http=require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          '<h2 text-align:center">Home Page</h2><ul><li><a href="/">home</a></li><li><a href="/about">about</a></li><li><a href="/contact">contact</a></li></ul>'
        );
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          '<h2 text-align:center">About Page</h2><ul><li><a href="/">home</a></li><li><a href="/about">about</a></li><li><a href="/contact">contact</a></li></ul>'
        );
        break;
      case "/contact":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          '<h2 text-align:center">Contact Page</h2><ul><li><a href="/">home</a></li><li><a href="/about">about</a></li><li><a href="/contact">contact</a></li></ul>'
        );
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(
          '<h2 text-align:center">404 NOT FOUND</h2><ul><li><a href="/">home</a></li><li><a href="/about">about</a></li><li><a href="/contact">contact</a></li></ul>'
        );
        break;
    }
    res.end();
  });
  const port = 5000;
  
  server.listen(port, () => {
    console.log(`Sunucu ${port} nolu portta başlatıldı.`);
  });