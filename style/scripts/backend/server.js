const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const config = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openai = new OpenAIApi(config);

app.post("/chat", async (req, res) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [{ role: "user", content: req.body.prompt }],
  });
  res.json({ reply: response.data.choices[0].message.content });
});

app.listen(3000, () => console.log("India GPT backend running on port 3000"));
