import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/InputArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputArea from "./Components/OldPage";
function App() {
  return (
    // <BrowserRouter basename={window.location.pathname || ""}>
    //   <Routes>
    //     <Route path="/2" element={} />
    //   </Routes>
    // </BrowserRouter>
    <InputArea />
  );
}

export default App;
