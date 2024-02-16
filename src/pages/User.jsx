import { useEffect } from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  useEffect(()=>{
    // grab user from database
    // let user = fetch(`users/${id}`)
  },[])
  return (
    <div>
      <p>User Page</p>
      <p>user id is: {id}</p>
    </div>
  );
};
export default User;
