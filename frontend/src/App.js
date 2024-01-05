import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages and components
import Login from "./components/Login";
import NavbarComponent from "./components/Navbar";
import Signup from "./components/Signup";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;