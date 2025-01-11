const express = require("express");
const cloudinary = require("cloudinary");

const router = express.Router();

const data = [
  { name: "image1", desc: " the girl image" },
  { name: "image1", desc: " the boy image" },
];
console.log(data.map((el) => [el.name, el.desc]));
router.get("/", async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
    });
    const images = result.resources.map((image) => ({
      url: image.secure_url,
      id: image.public_id,
    }));
    const data = [
      {
        image: images[0],
        price: "$39.00",
        categories: "women",
        discription: "image1",
        name: " avery-arwood",
      },
      {
        image: images[1],
        price: "$29.00",
        categories: "women",
        discription: "image2",
        name: " urfriendlyphotog",
      },
      {
        image: images[2],
        price: "$19.99",
        categories: "men",
        discription: "image3",
        name: " joon-tae-kim",
      },
      {
        image: images[3],
        price: "$149.99",
        categories: "men",
        discription: "image4",
        name: " rajeshverma",
      },
      {
        image: images[4],
        price: "$19,99",
        categories: "men",
        discription: "image5",
        name: " rajeshverma",
      },
      {
        image: images[5],
        price: "$49,99",
        categories: "women",
        discription: "image6",
        name: " rdne",
      },
      {
        image: images[6],
        price: "$35,99",
        categories: "women",
        discription: "image7",
        name: " wancukz",
      },
      {
        image: images[7],
        price: "$69.99",
        categories: "men",
        discription: "image8",
        name: " azurite-has",
      },
      {
        image: images[8],
        price: "$59.99",
        categories: "men",
        discription: "image9",
        name: " pavel-danilyuk",
      },
      {
        image: images[9],
        price: "$12.99",
        categories: "women",
        discription: "image10",
        name: " rtempodrez",
      },
    ];
    const dataimages = data.map((image, index) => ({
      imageData: image.image,
      name: image.name,
      description: image.discription,
      price: image.price,
      categories: image.categories,
    }));

    res.status(200).json(dataimages);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
