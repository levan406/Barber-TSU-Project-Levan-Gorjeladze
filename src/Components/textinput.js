import { useState } from "react";

const TextInput = (props) => {
  const { inputType, id, value, onChange, validationType, validationText } =
    props;
  const [isValidInput, setIsValidInput] = useState(true);

  const handleChange = (e) => {
    if (validationType === "password") {
      if (e.target.value.lenght < 8) {
        setIsValidInput(false);
      } else {
        setIsValidInput(true);
      }
    }

    if (validationType === "email") {
      if (e.target.value.lenght < 8) {
        setIsValidInput(false);
      } else {
        setIsValidInput(true);
      }
    }

    onChange(e);
  };

  return (
    <>
      <input
        type={inputType}
        onChange={(e) => handleChange(e)}
        value={value}
        id={id}
        {...props}
      />
      {!isValidInput && (
        <label style={{ color: "red", paddingLeft: "10px" }}>
          {validationText}
        </label>
      )}
    </>
  );
};

export default TextInput;
