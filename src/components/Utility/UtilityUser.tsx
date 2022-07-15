import httpClient from "../../thunk/interceptor";

const UtilityUser = async () => {
  return httpClient
    .get("/userprofile/currentuser?email=" + localStorage.getItem("userID"))
    .then(function (response) {
      return response.data;
    });
};

export default UtilityUser;
