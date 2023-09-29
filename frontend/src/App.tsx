import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import api from "./services/api";

export function App() {

  useEffect(() => {
    setInterval(() => {
      api.get('/').then(res => {
        alert(res.data.message)
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