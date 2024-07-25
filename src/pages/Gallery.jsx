import React from 'react';

const Gallery = () => (
  <div className="container mt-4">
    <h2>Gallery</h2>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4">
        <img src="https://via.placeholder.com/300" alt="Sports Day" className="img-fluid" />
        <p>Students participating in various sports events</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <img src="https://via.placeholder.com/300" alt="Science Exhibition" className="img-fluid" />
        <p>"Students presenting their science projects</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <img src="https://via.placeholder.com/300" alt="Cultural Fest" className="img-fluid" />
        <p>Students performing in the cultural fest.</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <img src="https://via.placeholder.com/300" alt="Cultural Fest" className="img-fluid" />
        <p>A glimpse of our interactive classrooms.</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <img src="https://via.placeholder.com/300" alt="Cultural Fest" className="img-fluid" />
        <p>Students reading and studying in the school library.</p>
      </div>
    </div>
  </div>
);

export default Gallery;

