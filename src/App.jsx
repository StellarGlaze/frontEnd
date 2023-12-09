import AboutUsPage from "./pages/AboutUs";
import ContractPage from "./pages/ContractPage";
import FaqPage from "./pages/FaqPage";
import LandingPage from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import { useAccount } from "wagmi";
import StaticPage from "./pages/StaticPage";
import TransactionPage from "./pages/TransactionPage";

const App = () => {
  const { address } = useAccount();
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route
            path="/"
            element={address ? <ContractPage /> : <StaticPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
