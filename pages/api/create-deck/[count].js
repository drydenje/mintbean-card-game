import createDeck from "./async";

export default function handler(req, res) {
  createDeck(req).then((data) => {
    if (!data) {
      https: res.status(404).json("Data not found");
    }

    https: res.status(200).json(data);
  });
}
