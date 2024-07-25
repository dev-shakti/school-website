import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
    <header className="text-center mb-4">
      {/* <img src={logo} alt="Springdale Public School" className="img-fluid" /> */}
      <h1>Springdale Public School</h1>
      <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
    </header>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1593013820725-ca0b6076576f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Annual Sports Day"
        />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Science Exhibition"
        />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1664300356549-6a10b0bf2312?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cultural Fest"
        />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="mt-4">
      <h2>Quick Links</h2>
      <ul className="list-unstyled">
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Home
