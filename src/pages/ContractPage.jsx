import { useState } from "react";
import CustomDialog from "../components/CustomDialog";
import ContractStatus from "../components/ContractStatus";

function ContractPage() {
  // const testnet = "https://mumbai.polygonscan.com/";

  // const { address } = useAccount();
  // const walletAddress = address;
  // const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
  // var balance = web3.eth.getBalance(walletAddress);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="container flex justify-evenly mx-auto mt-10">
        <div className="flex gap-2">
          <h1 className="text-white">Account Balance: </h1>
          <p className="text-white"></p>
        </div>
        <div className="flex gap-2">
          <h1 className="text-white">Total Allowance Sanctioned: </h1>
          <p className="text-white"></p>
        </div>
        <div className="flex gap-2">
          <h1 className="text-white">Total Benefactors: </h1>
          <p className="text-white">0</p>
        </div>
      </div>
      <div className="mt-[10rem]">
        <h1 className="text-5xl text-white text-center">
          No Allowance Sanctioned
        </h1>
        <div className="flex gap-2 justify-center mt-6">
          <button
            type="button"
            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            onClick={openDialog}
          >
            Add An Allowance
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-3xl  text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Learn More
          </button>
        </div>

        {/* <div>
          <ContractStatus
            createdAt="9th Dec 2023"
            status="Running"
            purpose="Purpose"
            numBenefactors="4"
            sanctionedAmount="4000"
          />
        </div> */}

        <CustomDialog open={isDialogOpen} handleClose={closeDialog} />
      </div>
    </>
  );
}

export default ContractPage;
