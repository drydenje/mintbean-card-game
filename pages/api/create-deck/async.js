import fetch from "node-fetch";

export default async function createDeck(req, res) {
  let count = 0;
  if (req.query != undefined) {
    count = req.query.count;
  } else {
    count = 1;
  }

  const deckUrl = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${count}`;

  try {
    const response = await fetch(deckUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR:", error);
    return error;
  }
  // return data;
}
