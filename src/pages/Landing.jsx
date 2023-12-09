import Header from "../components/layout/Header";
import StaticPage from "./StaticPage";
import { useAccount } from "wagmi";
import stars from "../assets/stars.png";
import Footer from "../components/layout/Footer";

function LandingPage() {
  const { address } = useAccount();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#02040F]">
      {/* Image Background */}
      <img
        className="absolute top-0 left-0  w-full h-[55rem] object-cover"
        src={stars}
        alt="Stars Background"
      />

      {/* Content */}
      <Header />
      {address ? <></> : <StaticPage />}
      <Footer />
    </div>
  );
}

export default LandingPage;
