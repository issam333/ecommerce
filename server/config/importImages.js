const express = require('express');
const cloudinary = require('cloudinary');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await cloudinary.api.resources({
            type: 'upload'
        });
        const images = result.resources.map(image => ({
            url: image.secure_url,
            id: image.public_id,
        }))
        res.status(200).json(images);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Failed to fetch images" });
    }

});

module.exports = router;