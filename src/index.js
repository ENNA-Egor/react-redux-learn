import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { configureStore } from "./store/index";

import App from "./App";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);