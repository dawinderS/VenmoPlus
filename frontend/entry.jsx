import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to Uome</h1>, root);
});