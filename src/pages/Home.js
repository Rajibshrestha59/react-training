import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonComponent from "../components/Button";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8080/users",
        method: "GET",
      });
      console.log("response in get user", response);
      setUsers(response.data);
      return response.data;
    } catch (err) {
      console.log("error in get user", err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {/* <ButtonComponent onClick={getAllUsers} buttonText="Get all users" /> */}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
