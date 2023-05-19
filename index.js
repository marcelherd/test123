const express = require("express");

const { characters } = require("./characters");
const { getRandomQuote } = require("./quotes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Content-Security-Policy": "default-src *",
    "X-Content-Security-Policy": "default-src *",
    "X-WebKit-CSP": "default-src *",
  });
  next();
});

app.get("/api/characters", (req, res) => res.json({ data: characters }));
app.get("/api/quotes/random", (req, res) =>
  res.json({ data: getRandomQuote() })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
