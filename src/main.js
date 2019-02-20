import App from "./App.html";
import { store } from "./store";

var app = new App({
  target: document.body,
  store
});

export default app;
