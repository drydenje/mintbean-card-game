// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "node-fetch";

export default async function handler(req, res) {
  createDeck().then((data) => {
    if (!data) {
      https: res.status(404).json("Data not found");
    }

    https: res.status(200).json(data);
  });
}

async function createDeck() {
  const deckUrl = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  const response = await fetch(deckUrl);
  const data = await response.json();
  return data;
}
