import Home from "./pages/Home";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
