import React, { useState } from "react";


export const Home = () => {
  const state = ["Haryana", "Delhi", "Uttar Pradesh", "Karnataka"];

  const city = {
    Haryana: ["Gurgaon", "Faridabad", "Rohtak"],
    Delhi: ["Dwarka", "Ghitorni"],
    "Uttar Pradesh": ["Noida", "Agra"],
    Karnataka: ["Bangalore", "Mandya"],
  };

  const [inputArr, setInputArr] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
  });

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const [selectedState, setSelectedState] = useState("");

  const onStateChange = (e) => {
    //setData({...data, selectedState});
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    setInputArr([...inputArr, data]);

    setData({
      name: "",
      email: "",
      state: "",
      city: "",
    });
  };

  return (
    <div className="mainBox">
      <div className="leftBox">
        <h1>User Info: </h1>
        <label>Name: </label>
        <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={(e) => onInputChange(e)}
        />
        <br />
        <br />
        <label>Email: </label>
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={(e) => onInputChange(e)}
        />
        <br />
        <br />
        State:{" "}
        <select
          name="state"
          value={(data.state = selectedState)}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="" hidden>
            Select
          </option>
          {state.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        City:{" "}
        <select
          name="city"
          value={data.city}
          onChange={(e) => onInputChange(e)}
        >
          {" "}
          {selectedState ? (
            <>
              <option value="" hidden>
                Select
              </option>
              {city[selectedState].map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </>
          ) : (
            <option value="" hidden>
              Select
            </option>
          )}
        </select>
        <br />
        <br />
        <input type="button" value="Submit" onClick={(e) => SubmitForm(e)} />
      </div>
      <div className="rightBox">
        <h1>Filled Data: </h1>
        {inputArr.map((item, index) => {
          return (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>State: {item.state}</p>
              <p>City: {item.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
