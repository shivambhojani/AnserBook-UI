import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchData = () => {
  fetch("");
};
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredInput, setFilteredInput] = useState([]);

  useEffect(() => {
    axios
      .get("https://tutorial4-api.herokuapp.com/api/users/")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!searchInput.trim().length) {
      setFilteredInput(users);
    }
    const data = [];

    users.forEach((item) => {
      if (
        item.firstName
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      ) {
        data.push(item);
      } else if (
        item.lastName
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      ) {
        data.push(item);
      }
    });

    setFilteredInput([...data]);
  }, [users, searchInput]);

  return (
    <div className="p-5 m-5">
      <input
        placeholder="Search"
        className="input"
        style={{ width: "50%" }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredInput.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <figure className="image is-128x128">
                    <img src={item.picture} alt="img" />
                  </figure>
                </td>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>
                  <Link to={`/user/${item.id}`}>View More</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
