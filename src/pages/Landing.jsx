import Header from "../components/layout/Header";
import StaticPage from "./StaticPage";
import { useAccount } from "wagmi";
import stars from "../assets/stars.png";

function LandingPage() {
  const { address } = useAccount();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#02040F]">
      {/* Image Background */}
      <img
        className="absolute top-0 left-0  w-3/4 h-[950px] object-cover"
        src={stars}
        alt="Stars Background"
      />

      {/* Content */}
      <Header />
      {address ? <></> : <StaticPage />}

      {/* Other content goes here */}
    </div>
  );
}

export default LandingPage;
