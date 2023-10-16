import Booksection from "./pages/booksection";
import Login from "./pages/login";
import Settings from "./pages/settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Mcq from "./pages/mcq";
import Mcqanswer from "./pages/mcqanswer";
import Audiobooksem1 from "./pages/audiobooksem1";
import Audiobooksem2 from "./pages/audiobooksem2";
import Signup from "./pages/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/booksection" element={<Booksection />} />
          <Route path="/mcq" element={<Mcq />} />
          <Route path="/mcqanswer" element={<Mcqanswer />} />
          <Route path="/audiobooksem1" element={<Audiobooksem1 />} />
          <Route path="/audiobooksem2" element={<Audiobooksem2 />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
