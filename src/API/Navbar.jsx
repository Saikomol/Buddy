import { Link } from "react-router-dom"; //2

const Navbar = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <Link to="Registration">Registration</Link>
            </li>
          </>
        )}
        <li>{user && <Link to="users">users</Link>}</li>
      </ul>
    </nav>
  );
};
export default Navbar;
