import { useEffect, useState } from "react";
import TextInput from "./textinput";

const NewPassword = (props) => {
  const { data, setData } = props;

  return (
    <>
      <tr>
        <td align="left">Please enter your password *</td>
        <td align="left">
          <TextInput
            inputType="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
            id="password"
            validationType="password"
            validationText="password must be at least 8 charachters"
          />
        </td>
      </tr>
      <tr>
        <td align="left">Confirm your password *</td>
        <td align="left">
          <TextInput
            inputType="password"
            onChange={(e) =>
              setData({ ...data, passwordRepeat: e.target.value })
            }
            value={data.passwordRepeat}
            id="passwordRepeat"
            validationType="password"
            validationText="password must be at least 8 charachters"
          />
        </td>
      </tr>
    </>
  );
};

export default NewPassword;
