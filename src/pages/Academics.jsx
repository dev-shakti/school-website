import React from "react";

const Academics = () => (
  <div className="container my-4">
    <h2 className="text-center mb-4">Academics</h2>
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Curriculum</h4>
        <ul className="list-unstyled">
          <li>
            <h5>Primary (Grades 1-5)</h5>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </li>
          <li>
            <h5>Secondary (Grades 6-10)</h5>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </li>
          <li>
            <h5>Senior Secondary (Grades 11-12)</h5>
            <ul>
              <li>
                <h6>Science Stream</h6>
                <ul>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>English</li>
                </ul>
              </li>
              <li>
                <h6>Commerce Stream</h6>
                <ul>
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>English</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Teaching Methodologies</h4>
        <p className="card-text">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>
    </div>
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Educational Resources</h4>
        <p className="card-text">
          Digital classrooms, interactive learning modules, and access to
          online educational platforms.
        </p>
      </div>
    </div>
  </div>
);

export default Academics;
