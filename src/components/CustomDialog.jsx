import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const CustomInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2">{label}</label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// const CustomTextField = ({ label, name, value, onChange }) => {
//   return (
//     <FormControl fullWidth margin="normal">
//       <InputLabel>{label}</InputLabel>
//       <InputBase
//         name={name}
//         value={value}
//         onChange={onChange}
//         inputProps={{ style: { color: "#FFF" } }}
//         style={{ color: "#FFF" }}
//       />
//     </FormControl>
//   );
// };

// const CustomSelect = ({ label, name, value, onChange, options }) => {
//   return (
//     <FormControl fullWidth margin="normal">
//       <InputLabel>{label}</InputLabel>
//       <Select
//         name={name}
//         value={value}
//         onChange={onChange}
//         style={{ color: "#FFF" }}
//       >
//         {options.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

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
      <DialogContent style={{ backgroundColor: "#0C0E1A", padding: "2rem" }}>
        <div style={{ display: "flex", minHeight: "500px" }}>
          <div
            style={{
              width: "30%",
              border: "1px dashed rgba(255, 255, 255, 0.20)",
              marginRight: "5%",
            }}
          ></div>
          <div style={{ width: "60%" }}>
            <form>
              {/* <TextField
                label="Purpose"
                name="purpose"
                value={formValues.purpose}
                onChange={handleInputChange}
              /> */}
              <CustomInput
                label="Purpose"
                name="purpose"
                value={formValues.purpose}
                onChange={handleInputChange}
              />

              <TextField
                label="Start Time"
                name="startTime"
                value={formValues.startTime}
                onChange={handleInputChange}
              />
              <TextField
                label="End Time"
                name="endTime"
                value={formValues.endTime}
                onChange={handleInputChange}
                style={{
                  borderColor: "white",
                }}
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
                  <TextField
                    label="Recipient Address"
                    name="address"
                    value={recipient.address}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                  <Select
                    label="Level"
                    name="level"
                    value={recipient.level}
                    onChange={(e) => handleInputChange(e, index)}
                    options={[
                      { label: "Low", value: "low" },
                      { label: "Medium", value: "medium" },
                      { label: "High", value: "high" },
                    ]}
                  />
                  <IconButton onClick={() => removeRecipient(index)}>
                    {/* <DeleteIcon /> */}
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
