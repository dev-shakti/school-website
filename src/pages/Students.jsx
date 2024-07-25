import React from "react";


const Students = () => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Students</h2>

    <div className="card-deck">
      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">Life at Springdale</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>Extracurricular Activities:</strong> Music, Dance, Drama,
              Art, Sports, Robotics, Debate Club, Science Club
            </li>
            <li className="mb-2">
              <strong>Clubs and Societies:</strong> Literary Society,
              Environmental Club, Astronomy Club, Coding Club
            </li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">Achievements</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>John Smith:</strong> National Level Math Olympiad Winner
            </li>
            <li className="mb-2">
              <strong>Sarah Lee:</strong> Gold Medalist in State Swimming
              Championship
            </li>
            <li className="mb-2">
              <strong>Tech Innovators Club:</strong> Winners of Inter-School
              Robotics Competition
            </li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">Student Council</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>President:</strong> Amy Parker, Grade 12
            </li>
            <li className="mb-2">
              <strong>Vice President:</strong> Rajiv Mehta, Grade 11
            </li>
            <li className="mb-2">
              <strong>Secretary:</strong> Lisa Wong, Grade 10
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Students;
