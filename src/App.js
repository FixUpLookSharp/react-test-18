import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./app/components/AppRouter";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./app/components/AppNavbar";
import AppHeader from "./app/components/AppHeader";

function App() {
  return (
      <BrowserRouter>
          <AppNavbar />
          <AppRouter />
          <AppHeader />
      </BrowserRouter>
  );
}

export default App;
