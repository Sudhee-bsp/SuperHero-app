import connectToDB from "../../../config/db";

import Hero from "../../../models/Hero";

connectToDB();

// get a unique record, update a record, delete a record.

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);
        if (!hero) {
          res.status(404).json({ success: false, message: "Hero not found" });
        }
        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!hero) {
          res
            .status(404)
            .json({ success: false, message: "Hero not found to Update" });
        }
        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "DELETE":
      try {
        const hero = await Hero.deleteOne({ _id: id });
        if (!hero) {
          res
            .status(404)
            .json({ success: false, message: "Hero not found to Delete" });
        }
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
