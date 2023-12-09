import Header from "../components/layout/Header";
import ContractPage from "./ContractPage";
import StaticPage from "./StaticPage";
import { useAccount } from "wagmi";

function LandingPage() {
  const { address } = useAccount();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#02040F]">
      {/* Content */}
      <Header />
      {address ? <ContractPage /> : <StaticPage />}

      {/* Other content goes here */}
    </div>
  );
}

export default LandingPage;
