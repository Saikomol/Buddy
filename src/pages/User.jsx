import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = ({user}) => {

  const navigate = useNavigate();
  const { id } = useParams();
  if (!user){
    navigate('/login')
    return null;
  }
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
