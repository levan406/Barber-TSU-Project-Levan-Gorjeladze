import TextInput from "./textinput";

const Client = (props) => {
  const { data, setData } = props;

  return (
    <>
      <tr>
        <td align="left">Please enter your phone *</td>
        <td align="left">
          <TextInput
            inputType="text"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            value={data.phoneNumber}
            id="clientPhone"
            validationType="phoneNumber"
            validationText="phone number is not valid"
          />
        </td>
      </tr>
    </>
  );
};

export default Client;
