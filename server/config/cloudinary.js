const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();


const CloudinaryFun = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


  cloudinary.api.ping((error, result) => {
    if (error) {
      console.error(`Error connecting to Cloudinary: ${error.message}`);
    } else {
      console.log(result,"Connected to Cloudinary ✅ ");
    }
  });
};


module.exports = CloudinaryFun;
