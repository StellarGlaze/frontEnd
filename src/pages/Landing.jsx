import Header from "../components/layout/Header";
import ContractPage from "./ContractPage";
import StaticPage from "./StaticPage";
import { useAccount } from "wagmi";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router";
function LandingPage() {
  const { address } = useAccount();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#02040F]">
      {/* Content */}
      <Header />
      <Outlet />
      {/* Other content goes here */}
      <Footer />
    </div>
  );
}

export default LandingPage;
