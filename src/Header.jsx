import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Favorites</a>
      </nav>
    </header>
  );
}
