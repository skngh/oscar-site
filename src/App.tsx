import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Samples from "./pages/Samples";
import Contact from "./pages/Contact";
import Pics from "./pages/Pics";
import Credits from "./pages/Credits";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
