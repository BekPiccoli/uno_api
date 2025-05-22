import { createUser, checkUser } from "../controller/user.js";
import { createTitulo, checkTitulo } from "../controller/titilo.js";

export const routePost = (app) => {
  app.post("/user/create", createUser);
  app.post("/titulo/create", createTitulo);
};
export const routeGet = (app) => {
  app.get("/users/check", checkUser);
  app.get("/titulo/check", checkTitulo);
};
