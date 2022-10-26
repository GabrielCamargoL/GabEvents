import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import aws from "./services/aws";

export function App() {

  useEffect(() => {
    setInterval(() => {
      aws.get('/').then(res => {
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