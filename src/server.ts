import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/api/report", (_req, res) => {
  res.json({
    date: new Date().toLocaleDateString(),

    marketSentiment: "Bullish",

    riskLevel: "Medium",

    topMovers: [
      "BTC",
      "ETH",
      "BNB"
    ],

    summary:
      "Crypto market remains strong with positive momentum across major assets. Trading activity and liquidity remain healthy.",

    opportunities: [
      "BTC shows steady strength",
      "ETH ecosystem remains active",
      "BNB maintains solid liquidity"
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log("        LA INSIGHT AI");
  console.log(" AI Daily Crypto Report Agent");
  console.log(" Built by @tolamanh1995");
  console.log("=================================");
  console.log("Running on http://localhost:3000");
});
