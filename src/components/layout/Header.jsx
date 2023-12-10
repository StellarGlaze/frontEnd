// src/components/Header.js
import logo from "../../assets/AllowFlow.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="bg-blue-50 bg-opacity-0 p-10 flex items-center justify-between w-full z-50">
      {/* Left side - Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-auro h-5" />
      </div>

      <div className="flex gap-4">
        <a href="/transaction" className="text-white mt-2">
          Make Transaction
        </a>
        <ConnectButton showBalance={false} />
      </div>
    </header>
  );
};

export default Header;
