const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectDB/connectDB.js");
const { signIn, login, home } = require("./routes/index.js");
const app = express();
const cors = require("cors");
const User = require("./model/userSchema.js");
const CloudinaryFun = require('./config/cloudinary.js');
const importImages = require("./config/importImages.js")


// cloudinary Configuration

CloudinaryFun();

// تفعيل CORS
app.use(cors());

// الإعدادات الافتراضية (إذا كنت تريد تخصيص السماح لنطاق معين)
app.use(
  cors({
    origin: "http://localhost:3000", // النطاق المسموح به
    methods: ["GET", "POST", "PUT", "DELETE"], // الطرق المسموحة
    credentials: true, // إذا كنت تحتاج إرسال ملفات تعريف الارتباط (Cookies)
  })
);

dotenv.config();

app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/signin", signIn);
app.use("/api/login", login);
app.use("/", home);
app.use("/api/images", importImages);

app.get("/test", async (req, res) => {
  try {
    let data = await User.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


connectDB();

const server = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} ✅ `);
    });
  } catch (error) {
    console.log(`Error starting server: ${error} ❌ `);
  }
};

server();
