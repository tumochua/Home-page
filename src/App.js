import Header from "./component/header/Header";
import Home from "./component/content/home/Home";
import Customers from "./component/content/customers/Customers";
import { Routes, Route } from "react-router-dom";
import Services from "./component/services/Services";
import "./App.css";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
      <div id="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
