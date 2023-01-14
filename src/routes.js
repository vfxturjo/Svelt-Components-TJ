import { wrap } from "svelte-spa-router/wrap";

import Home from "./lib/Home.svelte";
import LoadingAnim from "./lib/loadingAnim.svelte";


export const routes = {
  // Home page
  "/": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),
  "/Svelt-Components-TJ": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),
  "/home": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),

  // main pages
  "/gallery": wrap({
    asyncComponent: () => import("./lib/Gallery/Gallery.svelte"),
  }),



  // utility page
  "/Designer": wrap({
    asyncComponent: () => import("./lib/debugging/DesignerGreenRoom.svelte"),
  }),

  //! MAIN APPS
  // // Counter app
  // "/CounterApp": wrap({
  //   asyncComponent: () => import("./lib/CounterApp/CounterApp.svelte"),
  // }),


  // error catching
  "*": wrap({
    asyncComponent: () => import("./lib/E404.svelte"),
  }),
};
