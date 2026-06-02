import { app } from "./app.js";
import { connectDB } from "./db/db.js";

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection lost:", err);
  });
