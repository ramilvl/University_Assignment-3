import "../src/style/home.css";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homePage">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars" />
        </label>
        <label className="logo">DesignX</label>
        <ul>
            <Link to='/home'>Home</Link>
        
            <Link to='./flash'>Flashcard</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
