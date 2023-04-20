import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Store } from "./page/Store";
import { Navbar } from "./component/Navbar";
import { CartProvider } from "./context/Cart-Context";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
