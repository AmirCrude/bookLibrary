import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Server Configuration
const app = express();
const port = 3000;

// Database Configuration
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "bookLibrary",
    password: "Amir&postgres_1738",
    port: 5432,
  });
  db.connect();


  // Middleware Configuration
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.render("index.ejs");
  })


  // Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
