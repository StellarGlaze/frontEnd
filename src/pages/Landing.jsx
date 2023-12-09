import Header from "../components/layout/Header";
import StaticPage from "./StaticPage";
import { useAccount } from "wagmi";

function LandingPage() {
  const { address } = useAccount();
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {address ? <></> : <StaticPage />}
    </div>
  );
}

export default LandingPage;
