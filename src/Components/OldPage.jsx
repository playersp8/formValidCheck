import React, { useState } from "react";
import axios from "axios";

const dropdownData = [
  {
    countryState: " ",
    city: [" "],
  },
  {
    countryState: "Haryana",
    city: ["", "Gurgaon", "Rohtak"],
  },
  {
    countryState: "Delhi",
    city: ["", "Dwarka", " Ghitorni"],
  },
  {
    countryState: "Uttar Pradesh",
    city: ["", "Noida", "Agra"],
  },
  {
    countryState: "Karnataka",
    city: ["", "Banglore", "Mandya"],
  },
];
const InputArea = () => {
  const [{ address, state }, setData] = useState({
    address: "",
    state: "",
  });

  const [stateName, setStateName] = useState(" ");
  const [cityName, setCityName] = useState(" ");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
  });

  const nameRegex = /^[a-zA-Z ]{3,30}$/;
  const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const validation = (e) => {
    e.preventDefault();
    var errors = [];

    if (!nameRegex.test(userData.name)) {
      errors[errors.length] = " Please write the correct Name";
    }

    if (!emailRegex.test(userData.email)) {
      errors[errors.length] = " Please write the correct Email";
    }
    if (stateName === " ") {
      errors[errors.length] = " Please write the correct State";
    }
    if (cityName === " ") {
      errors[errors.length] = " Please write the correct City";
    }
    if (errors.length > 0) {
      reportErrors(errors);

      return false;
    }
    datasave();
  };

  function reportErrors(errors) {
    var msg = "Validation Failed\n";
    for (var i = 0; i < errors.length; i++) {
      var numError = i + 1;
      msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
  }

  const dropdown = dropdownData.map((address) => (
    <option key={address.countryState} value={address.countryState}>
      {address.countryState}
    </option>
  ));

  const city = dropdownData
    .find((item) => item.countryState === address)
    ?.city.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

  function handleCountryChange(event) {
    setData((data) => ({ state: "", address: event.target.value }));

    setStateName(event.target.value);
  }

  function handleStateChange(event) {
    setData((data) => ({ ...data, state: event.target.value }));

    setCityName(event.target.value);
  }

  //Data Saving using API
  const { name, email } = userData;
  const datasave = (res) => {
    axios.post("http://localhost:3003/task1", userData).then((res) => {
      console.log(res);
      alert("Thanks. Your response has beed saved.");
    });
  };
  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="mainBox">
      <div className="InputArea container">
        <br />
        <br />

        <div>
          <form method="post" onSubmit={(e) => validation(e)}>
            <div>
              <div>
                <h1>USER INFO</h1>
              </div>
              <label for="validationDefault01">Name: </label>
              <br />
              <input
                type="text"
                id="validationDefault01"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <br></br>
            <div>
              <label for="validationDefaultUsername">Email id: </label>
              <br />

              <input
                type="text"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <br />
            <div>
              <label for="state">State :- </label>
              <br />

              <select
                name="state"
                value={(userData.state = address)}
                onChange={handleCountryChange}
              >
                {dropdown}
              </select>
            </div>
            <br />
            <div>
              <label for="city">City :- </label>
              <br />

              <select
                name="city"
                value={(userData.city = state)}
                onChange={handleStateChange}
              >
                {city}
              </select>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div class="col-12">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="OutputArea">
        <br />
        <br />
        <form>
          <p>
            <h1>FILLED DATA</h1>
            <tr>
              <td>NAME: </td>
              <td>{userData.name}</td>{" "}
            </tr>
            <br></br>

            <tr>
              <td>EMAIL: </td>
              <td>{userData.email}</td>
            </tr>
            <br></br>
            <tr>
              <td> STATE: </td>
              <td>{stateName}</td>
              <br></br>
            </tr>

            <br />
            <tr>
              <td>CITY: </td>
              <td>{cityName}</td>
            </tr>
          </p>
        </form>
      </div>
    </div>
  );
};

export default InputArea;
