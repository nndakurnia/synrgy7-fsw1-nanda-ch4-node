const http = require("http");

const { data } = require("./people");

const onRequest = (req, res) => {
  const urlParts = req.url.split("/");
  const id = parseInt(urlParts[2]);

  switch (urlParts[1]) {
    case "":
      res.end("Hello World!");
      return;
    case "about":
      res.end("This is about");
      return;
    case "people":
      if (req.method === "GET" && urlParts[2] === undefined) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
        return;
      } else if (req.method === "GET" && !isNaN(id)) {
        const person = data.find((person) => person.id === id);
        if (person) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(person));
          return;
        } else {
          res.writeHead(404).end("Person not found!");
          return;
        }
      } else if (req.method === "DELETE" && !isNaN(id)) {
        const index = data.findIndex((person) => person.id === id);
        if (index !== -1) {
          data.splice(index, 1);
          res.writeHead(200).end("Data deleted successfully");
          return;
        } else {
          res.writeHead(404).end("Person not found!");
          return;
        }
      } else {
        res.writeHead(405).end("Method Not Allowed");
        return;
      }
    default:
      res.writeHead(404).end("Not found!");
      return;
  }
};

const server = http.createServer(onRequest);

server.listen(8000, "localhost", () => console.log("Server is running ..."));
