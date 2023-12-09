// src/components/FaqPage.js

import FaqItem from "../components/layout/FaqItem";
import Header from "../components/layout/Header";
const FaqPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-40">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <FaqItem
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <FaqItem
          question="Why do we use it?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <FaqItem
          question="Where does it come from?"
          answer="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature."
        />
        {/* Add more FAQ items as needed */}
      </div>
    </>
  );
};

export default FaqPage;
