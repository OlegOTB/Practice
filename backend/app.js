require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(express.static("../frontend/build"));

app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("*", (req, res, next) => {
  if (req.headers.frontend) {
    next(); // передаем управление следующему обработчику
  } else {
    res.sendFile(
      path.resolve(__dirname, "..", "frontend", "build", "index.html")
    );
  }
});

app.use("/", routes);

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.join(__dirname, "..", "frontend", "build")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "..", "frontend", "build", "index.html")
//     );
//   });
// }

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
