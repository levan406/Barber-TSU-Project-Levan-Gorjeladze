import TextInput from "./textinput";

const Barber = (props) => {
  const { data, setData } = props;

  return (
    <>
      <tr>
        <td align="left">Please enter your First Name *</td>
        <td align="left">
          <TextInput
            inputType="text"
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            value={data.firstName}
            id="firstName"
          />
        </td>
      </tr>

      <tr>
        <td align="left">Please enter your Last Name *</td>
        <td align="left">
          <TextInput
            inputType="text"
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            value={data.lastName}
            id="lastName"
          />
        </td>
      </tr>

      <tr>
        <td align="left">Please enter your Email</td>
        <td align="left">
          <TextInput
            inputType="text"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            id="email"
          />
        </td>
      </tr>

      <tr>
        <td align="left">Please enter your Price *</td>
        <td align="left">
          <TextInput
            inputType="number"
            min="1"
            onChange={(e) => setData({ ...data, price: e.target.value })}
            value={data.price}
            id="price"
            style={{ width: "60px" }}
          />
        </td>
      </tr>
    </>
  );
};

export default Barber;
