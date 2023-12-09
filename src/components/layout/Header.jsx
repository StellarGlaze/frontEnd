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

      <div>
        <a href="/transaction">Make Transaction</a>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
