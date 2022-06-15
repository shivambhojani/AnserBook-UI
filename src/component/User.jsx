import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!params || !params.id) {
      return;
    }
    axios
      .get(`https://tutorial4-api.herokuapp.com/api/users/${params.id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [params]);

  return (
    <div className="m-5 p-5">
      <div className="box">
        <figure className="image is-128x128">
          <img src={user.picture} />
        </figure>
        <p className="mt-3">FirstName: {user.firstName}</p>
        <p>LastName: {user.lastName}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default User;
