import express from 'express';
import path from 'path';

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "src"))
);

app.get("/*", (req : express.Request, res : express.Response) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
});

// app.get("/about", (req : express.Request, res : express.Response) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
// });


// app.get("/about:id", (req : express.Request, res : express.Response) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
// });



app.listen(process.env.PORT || 3000, () => console.log("server running.."));