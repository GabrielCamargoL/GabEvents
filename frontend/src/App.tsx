import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import api from "./services/api";

export function App() {

  useEffect(() => {
    setInterval(() => {
      api.get('/shows').then(res => {
        console.log(res)
      })
    }, 60000);
  })

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};