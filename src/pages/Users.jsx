import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users page</h1>
      <Link to='/users/1'>user 1</Link>
      <Link to='/users/2'>user 2</Link>
      <Link to='/users/3'>user 3</Link>
    </div>
  );
};
export default Users;
