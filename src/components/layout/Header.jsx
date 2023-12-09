// src/components/Header.js

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="bg-blue-50 bg-opacity-80 p-4 flex items-center justify-between fixed top-0 w-full z-50">
      <div>
        <p className="font-bold">AllowFlow</p>
      </div>

      <div>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
