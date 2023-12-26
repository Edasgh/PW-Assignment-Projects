const http = require("http");
const url = require("url");
const port = 3000;

const menProductsData = async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const response = await data.json();

  return response;
};

const womenProductsData = async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const response = await data.json();

  return response;
};

const server = http.createServer(async (req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "application/json" });

  // Handle different endpoints
  if (pathname === "/") {
    // Respond with a sample JSON object for / endpoints
    const responseData = {
      message: "Welcome to Men & Women Dummy Data",
    };
    res.end(JSON.stringify(responseData));
  } else if (pathname === "/men") {
    // Respond with a different JSON object for /men endpoint
    const responseData = await menProductsData();
    res.end(JSON.stringify(responseData));
  } else if (pathname === "/women") {
    // Respond with a different JSON object for /women endpoint
    const responseData = await womenProductsData();
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
