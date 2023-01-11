import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
