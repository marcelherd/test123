const express = require("express");

const { characters } = require("./characters");
const { getRandomQuote } = require("./quotes");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/characters", (req, res) => res.json(characters));
app.get("/api/quotes/random", (req, res) => res.json(getRandomQuote()));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
