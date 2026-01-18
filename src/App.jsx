import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts";
import { About, Contact, Home, NoFound, Services } from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
