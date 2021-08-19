import createDeck from "./create-deck/async";

export default async function handler(req, res) {
  createDeck().then((data) => {
    if (!data) {
      https: res.status(404).json("Data not found");
    }

    https: res.status(200).json(data);
  });
}
