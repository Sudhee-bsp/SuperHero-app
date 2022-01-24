import connectToDB from "../../../config/db";

import Hero from "../../../models/Hero";

connectToDB();

// get all records, post a new record.

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heroes = await Hero.find({});
        res.status(200).json({ success: true, data: heroes });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ message: "Method not allowed" });
      break;
  }
};
