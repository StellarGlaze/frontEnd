import { useState } from "react";
import { Button } from "@mui/material";
import { getContract } from "viem";
import { useWalletClient } from "wagmi";
function TransactionPage() {
  const [addressInput, setAddressInput] = useState();
  const [amount, setAmount] = useState();

  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_provider",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "_recipients",
          type: "address[]",
        },
        {
          internalType: "uint256",
          name: "_transferDay",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_startTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_endTime",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "startTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
      ],
      name: "AllowanceSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "AllowanceTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
      ],
      name: "RecipientRemoved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "TransferMessage",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "allowances",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "endTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "provider",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "recipients",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
      ],
      name: "removeRecipient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_recipients",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      name: "setAllowances",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "setTransferMessage",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferAllowance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "transferDay",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "transferMessage",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const { data: w } = useWalletClient();
  if (!w) return <></>;
  const contract = getContract({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: abi,
    walletClient: w,
  });

  const handleSubmit = async () => {
    try {
      await contract.write.transferAllowance([addressInput, amount]);
      console.log("Payment Done");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          width: "73.0625rem",
          height: "14.6875rem",
          backgroundColor: "#0C0E1A",
          borderRadius: "1rem",
          margin: "2rem auto",
          padding: "3rem",
        }}
      >
        <h1 className="text-white text-4xl mb-8">Make Transaction</h1>
        <div>
          <div className="mb-4 col-span-6">
            <label className="block ml-3 text-white text-sm font-bold mb-2">
              Send To
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="Send TO"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="mb-4 col-span-">
            <label className="block ml-3 text-white text-sm font-bold mb-2">
              Amount
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="Send TO"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder=""
            />
          </div>
        </div>
        <Button className="mt-4" onClick={handleSubmit}>
          Make Payment
        </Button>
      </div>
    </>
  );
}
export default TransactionPage;
