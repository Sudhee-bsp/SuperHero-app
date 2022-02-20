const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema(
  {
    superHero: {
      type: String,
      required: [true, "Please enter a superHero name"],
      unique: true,
      trim: true,
    },
    realName: {
      type: String,
      required: true,
      maxlength: [200, "Real name must be less than 200 characters"],
    },
    description: {
      type: String,
      maxlength: [400, "Description can be upto 400 characters"],
    },
    timeAdded: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
