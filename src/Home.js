import React from 'react';
import '../src/style/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to My Portfolio</h2>
      <p>
        Hi, I'm Ramil Valiyev, a passionate developer. This is my portfolio where
        I showcase my projects.
      </p>

      <div className="project-list">
        <h3>Projects</h3>
        <br></br><br></br>
        <ul>

          <li>
            <b>Contraction-Timer-UI-Design:</b>
            <br></br>
            <p>This project aims to create a user-friendly and visually appealing web-based application for tracking contractions during labor.</p>

            Link: <a href="https://ramil-contraction-timer-ui-design.netlify.app/" target="_blank"rel="noopener noreferrer">Contraction Timer UI Design</a>
          </li>


          <li>
            <b>Search-UI-Design:</b>
            <br></br>
            <p>This project aims to explore and showcase innovative and user-friendly search user interface UI designs for web applications.</p>

            Link: <a href="https://ramil-search-ui-design.netlify.app/" target="_blank"rel="noopener noreferrer">Search-UI-Design</a>
          </li>

          <li>
            <b>Enter-Password-UI-Design:</b>
            <br></br>
            <p>This repository showcases an elegant and user-friendly user interface (UI) design for password entry screens.</p>

            Link: <a href="https://ramil-enter-password.netlify.app/" target="_blank"rel="noopener noreferrer">Enter-Password-UI-Design:</a>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Home;
