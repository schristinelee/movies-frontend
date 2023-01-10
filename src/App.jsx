import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { About } from "./About";
import { Home } from "./Home";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";
import { Footer } from "./Footer";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MoviesIndex } from "./MoviesIndex";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <LogoutLink />
      <Signup />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
