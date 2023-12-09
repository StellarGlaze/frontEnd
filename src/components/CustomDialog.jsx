import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import { useState } from "react";
import removeIcon from "../assets/remove.png";
import CustomInput from "./CustomInput";

const CustomDialog = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({
    purpose: "",
    startTime: "",
    endTime: "",
    recipients: [{ address: "", level: "" }],
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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-dialog-title"
      aria-describedby="custom-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        id="custom-dialog-title"
        style={{
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: "2.125rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          backgroundColor: "#0C0E1A",
          paddingTop: "7  0px",
        }}
      >
        Create Allowance
      </DialogTitle>
      <DialogContent
        style={{ backgroundColor: "#0C0E1A", padding: "2rem", height: "600px" }}
      >
        <div style={{ display: "flex", height: "500px" }}>
          <div
            style={{
              width: "30%",
              border: "1px dashed rgba(255, 255, 255, 0.20)",
              marginRight: "5%",
              maxHeight: "500px",
            }}
          ></div>
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
                      { label: "Low", value: "low" },
                      { label: "Medium", value: "medium" },
                      { label: "High", value: "high" },
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
      </DialogContent>
      <DialogActions
        style={{
          backgroundColor: "#0C0E1A",
          padding: "50px",
        }}
      >
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
          onClick={handleClose}
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
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
