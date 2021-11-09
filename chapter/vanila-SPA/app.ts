import express from 'express';
import path from 'path';

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "src"))
)



app.listen(process.env.PORT || 3000, () => console.log("server running.."));