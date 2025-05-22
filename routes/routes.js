import {
  createUser,
  checkUser,
  checkUserById,
  deleteUser,
} from "../controller/user.js";
import { createTitulo, checkTitulo } from "../controller/titilo.js";

export const routePost = (app) => {
  app.post("/user/create", createUser);
  app.post("/titulo/create", createTitulo);
};
export const routeGet = (app) => {
  app.get("/user/check", checkUser);
  app.get("/user/check/:id", checkUserById);
  app.get("/titulo/check", checkTitulo);
};
export const routeDelete = (app) => {
  app.delete("/user/delete/:id", deleteUser);
};
