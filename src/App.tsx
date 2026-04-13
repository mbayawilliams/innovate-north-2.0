import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
