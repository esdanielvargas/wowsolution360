import "./styles/app.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoFound from "./pages/NoFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./layouts/AppLayout";
import { useAuth } from "./hooks/useAuth";
import { db } from "./firebase/config";
import Publicity from "./pages/Publicity";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Account from "./pages/Account";

function App() {
  const auth = useAuth(db);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Rutas Privadas */}
          {auth ? (
            <>
              <Route path="/app/" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="publicity" element={<Publicity />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="/login" element={<Navigate to="/app" />} />
              <Route path="/register" element={<Navigate to="/app" />} />
            </>
          ) : (
            <>
              <Route path="/app/*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
