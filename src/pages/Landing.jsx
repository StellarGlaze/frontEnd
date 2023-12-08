import React from "react";
import Header from "../components/layout/Header";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Awesome Website
          </h1>
          <p className="text-lg mb-8">
            Explore the world of possibilities with our amazing website. We
            bring innovation, creativity, and functionality together to provide
            you with an unparalleled experience.
          </p>
          <p className="text-gray-600">
            Join us on this journey and discover a new era of digital
            excellence.
          </p>
        </div>
      </div>

      {/* Other content goes here */}
    </div>
  );
};

export default LandingPage;
