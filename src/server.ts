import "reflect-metadata";
import Database from "./core/infra/data/connections/database";
import App from "./core/presentation/App";
import dotenv from "dotenv";

dotenv.config({
  path: "./../.env",
});

new Database()
  .openConnection()
  .then((_) => {
    const app = new App();
    const port = process.env.PORT || "3000";

    app.init();
    app.start(parseInt(port));
  })
  .catch(console.error);
