import Home from "./pages/Home";
import Login from "./pages/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
