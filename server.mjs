import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const host = "127.0.0.1";
const port = 8080;

createServer(async (_request, response) => {
  try {
    const page = await readFile("index.html");
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(page);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error.message);
  }
}).listen(port, host, () => {
  console.log(`Orbit is running at http://${host}:${port}/`);
});
