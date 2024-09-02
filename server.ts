import { createServer } from "http";
import url from "url";
import movies from "./src/mocks/data/movies.json";

const port = 3001;

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/movies" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(movies));
  } else if (req.url!.startsWith("/movies/details") && req.method === "GET") {
    new URLSearchParams();
    const parsedUrl = url.parse(req.url!, true);
    const query = parsedUrl.query;
    const id = query.id;
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      res.writeHead(200);
      res.end(JSON.stringify(movie));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify({ error: "unknown id" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Mock JSON server is running on http://localhost:${port}`);
});
