import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Reg from "./Components/Reg/Reg";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
