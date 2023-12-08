import FaqPage from "./pages/FaqPage";
import LandingPage from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
