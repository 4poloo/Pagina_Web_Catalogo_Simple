import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Landing from "./pages/Landing";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogo" element={<Catalogo/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
