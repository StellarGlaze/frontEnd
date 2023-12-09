import AboutUsPage from "./pages/AboutUs";
import FaqPage from "./pages/FaqPage";
import LandingPage from "./pages/Landing";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
