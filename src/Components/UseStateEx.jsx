import React, { useState } from "react";

const UseStateUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const onInputChange = (event) => {
    const name = event.target.name;

    const value = event.target.value;
    console.log(name + " " + value);
    setUserData((anyPara) => {
      return { ...anyPara, [name]: value };
    });
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Register User</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              name="name"
              value={userData.name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Username"
              name="username"
              value={userData.username}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your E-mail Address"
              name="email"
              value={userData.email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Phone Number"
              name="phone"
              value={userData.phone}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Website Name"
              name="website"
              value={userData.website}
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-danger btn-block">Create Account</button>
        </form>
        <p class="fw-bold">{`My name is ${userData.name} and Email is ${userData.email}`}</p>
      </div>
    </div>
  );
};

export default UseStateUser;
