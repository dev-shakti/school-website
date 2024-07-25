import React from "react";

const Admissions = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admissions</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Process</h5>
          <p className="card-text">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Criteria</h5>
          <p className="card-text">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Important Dates</h5>
          <ul className="list-unstyled">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
