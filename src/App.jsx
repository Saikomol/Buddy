import {  useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  NotFoundPage,
  User,
  Users,
  Login,
  Registration,
} from "./pages";
import Navbar from "./API/Navbar";

function App() {
  const [user, setUser] = useState(null); // for not login user we
  // we will place set token in more inportant things page
const [token,setToken] = useState(localStorage.getItem('token'))//
console.log(token);
  return (
    <div>
      <Navbar token = {token}/>{/*props user to navbar// to not show if user is not log in  */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users user={user} />} />
          <Route path="/users/:id" element={<User user={user} />} />
          <Route path="/Login" element={<Login user={user} setUser={setUser} setToken={setToken}/>} />{/*setUser for lock   */}
          <Route path="/Registration" element={<Registration user={user} setUser={setUser} />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
