import proxy from "http-proxy-middleware";
import { Express } from "express";

export default function(app: Express): any {
  app.use(
    proxy("/api", {
      target: process.env.API_URL,
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  );
}
