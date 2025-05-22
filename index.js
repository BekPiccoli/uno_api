import express from "express";
import { routePost, routeGet } from "./routes/routes.js";
const app = express();
const port = 3000;
app.use(express.json());

routePost(app);
routeGet(app);

app.listen(port, () => {
  console.log(`online na porta ${port}`);
});
