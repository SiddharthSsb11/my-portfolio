import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

const inputStyles = {
  sx: {
    fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl: 15 },
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.25,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    },
  },
};

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 11.5, sm: 15, md: 15, lg: 15, xl: 15 },
    fontWeight: 200,
    opacity: 0.75,
    letterSpacing: 0.75,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
  },
};

const PhoneInput = ({ id, label, name, setValue, disabled = false }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState({ state: false, message: "" });

  const handleSubmit = () => {
    const updatedInput = input.replace(/\s/g, "");

    console.log("Original input:", input);
    console.log("Updated input:", updatedInput);

    let phoneNumber = updatedInput;

    if (updatedInput.startsWith("+91")) {
      phoneNumber = updatedInput.slice(3);
    }

    console.log("Phone number without country code:", phoneNumber);

    if (phoneNumber.trim().length === 0) {
      setError({ state: true, message: "Input required." });
      setValue("");
    } else if (!phoneNumber.match(/^[6-9]\d{9}$/)) {
      setError({
        state: true,
        message: "Please enter a valid 10-digit Indian mobile number.",
      });
      setValue("");
    } else {
      setValue(phoneNumber);
      setError({ state: false, message: "" });
    }
  };

  return (
    <MuiTelInput
      id={id}
      label={label}
      name={name}
      size="small"
      variant="standard"
      defaultCountry="IN"
      disableDropdown
      forceCallingCode
      focusOnSelectCountry
      preferredCountries={["IN"]}
      sx={{ my: { xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2 } }}
      InputProps={inputStyles}
      InputLabelProps={inputLabelStyles}
      value={input}
      onChange={(e) => setInput(e)}
      onBlur={() => handleSubmit()}
      error={error.state}
      helperText={error.state && error.message}
      disabled={disabled}
    />
  );
};

export default PhoneInput;
