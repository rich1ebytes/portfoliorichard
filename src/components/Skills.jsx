import javascript from "../assets/JavaScript.svg";
import postgres from "../assets/Postgres.svg";
import react from "../assets/React.svg";
import vite from "../assets/Vite.svg";
import nodeIcon from "../assets/Nodde.svg";
import express from "../assets/icons8-express-js.svg";
import mongo from "../assets/MongoDB.svg";
import python from "../assets/Python.svg"; 

function Skills() {
  return (
    <div className="w-full bg-black-950 py-10 text-white px-4 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <div className="skill-wrapper">
          <img src={javascript} alt="JavaScript" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">JavaScript</span>
        </div>
        <div className="skill-wrapper">
          <img src={react} alt="React" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">React</span>
        </div>
        <div className="skill-wrapper">
          <img src={vite} alt="Vite" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">Vite</span>
        </div>
        <div className="skill-wrapper">
          <img src={nodeIcon} alt="Node.js" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">Node.js</span>
        </div>
        <div className="skill-wrapper">
          <img src={express} alt="Express.js" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">Express.js</span>
        </div>
        <div className="skill-wrapper">
          <img src={mongo} alt="MongoDB" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">MongoDB</span>
        </div>
        <div className="skill-wrapper">
          <img src={postgres} alt="PostgreSQL" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">PostgreSQL</span>
        </div>
        <div className="skill-wrapper">
          <img src={python} alt="Python" className="w-14 h-14 sm:w-16 sm:h-16" />
          <span className="skill-label">Python</span>
        </div>
      </div>
    </div>
  );
}


export default Skills