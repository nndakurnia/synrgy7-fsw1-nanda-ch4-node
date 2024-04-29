const http = require("http");

const { data, getData, getDetail, getDetailByUsn, deleteById } = require("./people");

const onRequest = (req, res) => {
  const splittedUrl = req.url.split("/")[2];
  const id = +splittedUrl;

  if (req.url === '/') res.end('Hello World!')
  else if (req.url === '/people') getData(req, res)
  else if (req.method === 'GET' && id) getDetail(req, res, id)
  else if (req.method === 'GET' && splittedUrl) getDetailByUsn(req, res, splittedUrl)
  else if (req.method === 'DELETE' && id) deleteById(req, res, id)
};

const server = http.createServer(onRequest);

server.listen(8000, "localhost", () => console.log("Server is running ..."));
