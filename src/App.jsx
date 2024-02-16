import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFoundPage from "./pages/NotFoundPage";
import Users from "./pages/Users";
import User from "./pages/User";


function App() {
  return (
    <div>
      <div id="navbar">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/users">users</Link>
      </div>
      <div id="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/users/:id' element={<User />}/>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
