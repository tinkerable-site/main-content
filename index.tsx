import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

const makeProxy = (obj) => new Proxy(obj, {
  get(target, key) {
    window.nativeConsoleLog('get', obj, ...arguments);
    return target[key] ?? undefined;
  },
  set(target, key, value) {
    window.nativeConsoleLog('set', obj, ...arguments);
    if (key in target) {
      return false;
    }
    return target[key] = value;
  }
  });

const fakeLocation = {
  ...JSON.parse(JSON.stringify(window.location)),
  pathname: (new URLSearchParams(window.location.search)).get('path') ?? '/',
  assign: (...args) => {
      window.nativeConsoleLog('assign', args);
  },
}

const fakeWindow = {
    location: fakeLocation,
    history: {
      replaceState: (...args) => {
        window.nativeConsoleLog('replaceState', args);
      },
      state: makeProxy({name: 'state'})
    },
    addEventListener: (...args) => {
      window.nativeConsoleLog('addEventListener', args);
    }
}

window.nativeConsoleLog("init router");
const router = createBrowserRouter([
  // match everything with "*"
  { path: "*", element: <App /> },
], { window: fakeWindow })


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <ChakraProvider value={defaultSystem}>
    <RouterProvider router={router} />
  </ChakraProvider>
  </StrictMode>
);
