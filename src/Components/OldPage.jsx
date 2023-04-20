import React, { useState } from "react";
const stateData = [
  {
    state: "Select",
    city: ["Select"],
  },
  {
    state: "Haryana",
    city: ["Select", "Gurgaon", "Rohtak"],
  },
  {
    state: "Delhi",
    city: ["Select", "Dwarka", "Ghitorni"],
  },
  {
    state: "Uttar Pradesh",
    city: ["Select", "Noida", "Agra"],
  },
  {
    state: "Karnataka",
    city: ["Select", "Banglore", "Mandya"],
  },
];

const InputArea = () => {
  const [InputArr, setInputArr] = useState([]);
  const [{ address, state }, setData] = useState({
    address: "Select",
    state: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [stateName, setStateName] = useState(" ");
  const [cityName, setCityName] = useState(" ");
  const [error, setError] = useState(false);
  //Validation
  const nameRegex = /^[a-zA-Z ]{3,30}$/;
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const validation = (e) => {
    e.preventDefault();
    if (!nameRegex.test(userData.name)) {
      setError(true);
      return;
    }
    if (!emailRegex.test(userData.email)) {
      setError(true);

      return;
    }
    if (stateName === "") {
      setError(true);

      return;
    }
    if (cityName === "") {
      setError(true);

      return;
    }
    setError(false);
    setInputArr([...InputArr, userData]);
    setStateName("");
    setUserData({
      name: "",
      email: "",
      state: "",
      city: "",
    });
  };

  const countries = stateData.map((address) => (
    <option key={address.state} value={address.state}>
      {address.state}
    </option>
  ));

  const city = stateData
    .find((item) => item.state === address)
    ?.city.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

  function handleCountryChange(event) {
    setData((data) => ({ state: "", address: event.target.value }));
    setInputArr([...InputArr, address]);
    setStateName(event.target.value);
  }

  function handleStateChange(event) {
    setData((data) => ({ ...data, state: event.target.value }));
    setInputArr([...InputArr, state]);
    setCityName(event.target.value);
  }

  const onInputChange = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    console.log(name + " " + value);
    setUserData((anyPara) => {
      return { ...anyPara, [name]: value };
    });
    setInputArr([...InputArr, userData]);
  };
  return (
    <div className="mainBox">
      <div className="InputArea container">
        <br />
        <br />
        <div>
          <h1>User Info:</h1>
        </div>
        <div>
          <form method = "post" onSubmit={(e) => validation(e)}>
            <label for="state">Name:</label>
            <br />
            <input
              type="text"
              id="state"
              required
              name="name"
              value={userData.name}
              onChange={onInputChange}
            ></input>
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              id="state"
              type="email"
              name="email"
              value={userData.email}
              onChange={onInputChange}
              required
            ></input>
            <br />
            <div>
              <label for="state">State: </label>
              <br />
              <br/>
              <select value={address} onChange={handleCountryChange} required>
                {countries}
              </select>
            </div>
            
              <br/>
            <div>
              <label for="city">City: </label>
              <br />
              <br/>
              <select value={state} onChange={handleStateChange} required>
                {city}
              </select>
            </div>
            <br />
            <br/>
            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="OutputArea">
        <h1>Filled Data: </h1>
        Name : {userData.name}
        <br />
        Email : {userData.email} <br />
        State : {stateName} <br />
        City : {cityName}
      </div>
    </div>
  );
};

export default InputArea;
