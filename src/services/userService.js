import axios from "axios";
//get
export const getUser = async () => {
  console.log("get real");
  return await axios.get("http://localhost:3000/api/v1/users");
};
//post
export const saveUser = async (fName, lName, email) => {
  console.log("post real");
  return await axios.post("http://localhost:3000/api/v1/users", {user:{
    fName: fName,
    lName: lName,
    email: email,
  }});
};
