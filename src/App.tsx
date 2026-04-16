import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
