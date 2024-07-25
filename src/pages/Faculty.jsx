import React from "react";


const Faculty = () => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Faculty</h2>
    <div className="row">
      {facultyData.map((faculty, index) => (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{faculty.name}</h5>
              <p className="card-text">{faculty.position}</p>
              <p className="card-text">
                <strong>Experience:</strong> {faculty.experience}
              </p>
              <p className="card-text">
                <strong>Qualification:</strong> {faculty.qualification}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const facultyData = [
  {
    name: "John Doe",
    position: "Principal",
    experience: "20 years of experience in educational administration",
    qualification: "M.Ed",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    experience: "15 years of teaching experience",
    qualification: "M.Sc. in Physics",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    experience: "10 years of teaching experience",
    qualification: "M.A. in English",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    experience: "8 years of teaching experience",
    qualification: "M.Sc. in Mathematics",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    experience: "12 years of teaching experience",
    qualification: "M.Sc. in Chemistry",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    experience: "5 years of teaching experience",
    qualification: "B.Tech in Computer Science",
  },
];

export default Faculty;


