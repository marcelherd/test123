const express = require("express");
const helmet = require("helmet");

const { characters } = require("./characters");
const { getRandomQuote } = require("./quotes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.get("/api/characters", (req, res) => res.json(characters));
app.get("/api/quotes/random", (req, res) => res.json(getRandomQuote()));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
