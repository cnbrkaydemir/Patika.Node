import Koa from "koa";
const koa= require("koa");
const app = koa();
const port = 3000;

app.use((ctx) => {
  const url = ctx.path;
  ctx.set("content-type", "text/html");
  switch (url) {
    case "/":
      ctx.body = "<h1>Home Page</h1>";
      break;
    case "/about":
      ctx.body = "<h1>About Page</h1>";
      break;
    case "/contact":
      ctx.body = "<h1>Contact Page</h1>";
      break;
    default:
      ctx.body = "<h1>404 not found</h1>";
      ctx.status = 404;
      break;
  }
});
app.listen(port, () => console.log("I am listening !"));
