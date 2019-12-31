import express from "express";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import morgan from "morgan";

export function add(x: number, y: number): number {
  return x + y;
}

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(morgan("combined"));

  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log(username, password);
      return done(null, { username });
    })
  );

  app.get("/", (_, res) => {
    res.send("poyo");
  });
  app.post(
    "/login",
    passport.authenticate("local", {
      failureFlash: false,
      session: false
    }),
    (_, res) => {
      console.log("poyo");
      res.send("ok");
    }
  );

  app.listen(3000, () => console.log("http://localhost:3000"));
}

bootstrap().catch(err => console.error(err));
