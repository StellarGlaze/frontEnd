import { IconButton } from "@mui/material";
import { useState } from "react";
import removeIcon from "../assets/remove.png";
import Web3 from "web3";
import { getContract } from "viem";
import { useWalletClient } from "wagmi";
import CustomInput from "./layout/CustomInput";
import { Button } from "@mui/material";
function CreateAllowanceForm({ handleClose }) {
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
      stateMutability: "nonpayable",
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
          name: "recipients",
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
      inputs: [],
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

  const address = "0xA41Da02EBA54D4f5B8840b71446f43B4B58b5350";
  const infuraAPIkey = "d1d1322ae4a44eaeb30149d7d193e93d";
  const web3 = new Web3(`https://polygon-mumbai.infura.io/v3/${infuraAPIkey}`);
  const myContract = new web3.eth.Contract(abi, address);

  const { data: w } = useWalletClient();

  const [formValues, setFormValues] = useState({
    purpose: "",
    startTime: "",
    endTime: "",
    recipients: [{ address: "", level: 2 }],
  });
  if (!w) return <></>;
  const contract = getContract({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: abi,
    walletClient: w,
  });
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "address" || name === "level") {
      const updatedRecipients = [...formValues.recipients];
      updatedRecipients[index][name] = value;
      setFormValues({ ...formValues, recipients: updatedRecipients });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const addRecipient = () => {
    setFormValues({
      ...formValues,
      recipients: [...formValues.recipients, { address: "", level: "" }],
    });
  };

  const removeRecipient = (index) => {
    const updatedRecipients = [...formValues.recipients];
    updatedRecipients.splice(index, 1);
    setFormValues({ ...formValues, recipients: updatedRecipients });
  };

  const handleSubmit = async () => {
    try {
      const recipients = formValues.recipients.map((item) => item.address);
      const amounts = formValues.recipients.map((item) => item.level);
      contract.write.setAllowances([recipients, amounts]);

      console.log("Successsss");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ display: "flex", height: "500px" }}>
        <div
          style={{
            width: "30%",
            border: "1px dashed rgba(255, 255, 255, 0.20)",
            marginRight: "5%",
            maxHeight: "500px",
          }}
        >
          <ol className=" text-white">
            <li>
              <b>Low Allowance Level: </b>Controlled and modest fund allocation
              for essential spending needs, providing a foundational budgeting
              framework.
            </li>
            <br />
            <li>
              <b>Medium Allowance Level: </b>Balanced and versatile fund
              allocation catering to varied spending requirements, striking a
              middle ground between restraint and flexibility.
            </li>
            <br />
            <li>
              <b>High Allowance Level: </b>Generous fund allocation for users
              with higher spending needs, accommodating a broad spectrum of
              expenses and fostering financial autonomy.
            </li>
          </ol>
        </div>
        <div style={{ width: "60%", overflowY: "auto" }}>
          <form>
            <CustomInput
              label="Purpose"
              name="purpose"
              value={formValues.purpose}
              onChange={handleInputChange}
            />

            <CustomInput
              label="Start Time"
              name="startTime"
              value={formValues.startTime}
              onChange={handleInputChange}
              type="datetime"
            />
            <CustomInput
              label="End Time"
              name="endTime"
              value={formValues.endTime}
              onChange={handleInputChange}
              type="datetime"
            />

            <div style={{ marginTop: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={addRecipient}
              >
                Add Recipient
              </Button>
            </div>

            {formValues.recipients.map((recipient, index) => (
              <div key={index} style={{ display: "flex", marginTop: "1rem" }}>
                <CustomInput
                  label="Recipient Address"
                  name="address"
                  value={recipient.address}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <CustomInput
                  label="Level"
                  name="level"
                  value={recipient.level}
                  onChange={(e) => handleInputChange(e, index)}
                  type="select"
                  options={[
                    { label: "Low", value: 2 },
                    { label: "Medium", value: 4 },
                    { label: "High", value: 6 },
                  ]}
                />
                <IconButton onClick={() => removeRecipient(index)}>
                  <img
                    src={removeIcon}
                    alt="remove"
                    className=" w-16 m-auto ml-4"
                  />
                </IconButton>
              </div>
            ))}
          </form>
        </div>
      </div>

      <div className=" flex justify-end">
        <Button
          onClick={handleClose}
          variant="contained"
          style={{
            borderRadius: "2.5rem",
            background: "#0C0E1A",
            color: "#FFF",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          autoFocus
          variant="contained"
          style={{
            borderRadius: "2.5rem",
            background: "#002642",
            color: "#FFF",
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default CreateAllowanceForm;
