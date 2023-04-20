import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/InputArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputArea from "./Components/OldPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<InputArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;