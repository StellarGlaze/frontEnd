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
        <ConnectButton />
      </div>
      {/* Right side - Connect Wallet */}
      {/* <div>
        <button
          className="text-white px-4 py-2 rounded"
          style={{
            color: "#D9D9D9",
            fontFamily: "Inter",
            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            borderRadius: "6.25rem",
            background: "rgba(229, 149, 0, 0.70)",
          }}
        >
          Connect
        </button>
      </div> */}
    </header>
  );
};

export default Header;
