import express from "express";

export function add(x: number, y: number): number {
  return x + y;
}

async function bootstrap() {
  const app = express();

  app.get("/", (_, res) => {
    res.send("poyo");
  });

  app.listen(3000, () => console.log("http://localhost:3000"));
}

bootstrap().catch(err => console.error(err));
