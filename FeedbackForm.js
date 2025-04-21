import React, { useState, useEffect } from 'react';

function FeedBack() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [feedform, setFeedform] = useState('');
  const [rating, setRating] = useState('');

 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('feedbackForm'));
    if (storedData) {
      setFname(storedData.fname);
      setLname(storedData.lname);
      setMobile(storedData.mobile);
      setEmail(storedData.email);
      setFeedform(storedData.feedform);
      setRating(storedData.rating);
    }
  }, []);

  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 
  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      isValid = false;
    }
    return isValid;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        fname,
        lname,
        mobile,
        email,
        feedform,
        rating,
      };

     
      localStorage.setItem('feedbackForm', JSON.stringify(formData));

     
      alert('Submitted successfully. Thanks for your Feedback!');

     
      setFname('');
      setLname('');
      setMobile('');
      setEmail('');
      setFeedform('');
      setRating('');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engines" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z"/>
</svg></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              <i className="fa fa-fw fa-user"></i>Login
            </a>
            <a className="nav-item nav-link" href="/register">Register</a>
            <a className="nav-item nav-link" href="#">Profile</a>
            <a className="nav-item nav-link disabled" href="#">Logout</a>
          </div>
        </div>
      </nav>
      <br />
      <h1 className="text-center">FeedBack Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="fname"
            value={fname}
            className="form-control"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="lname"
            value={lname}
            className="form-control"
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="rating">Rating Star:</label>
          <select
            name="rating"
            id="rating"
            value={rating}
            className="btn btn-secondary dropdown-toggle"
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="review">FeedBack:</label>
          <textarea
            id="review"
            name="review"
            value={feedform}
            className="form-control"
            rows="4"
            cols="50"
            onChange={(e) => setFeedform(e.target.value)}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />

      
      

      <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, padding: '10px' }}>
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Example St, City, Country</p>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li>
                <a
                  href="#"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FeedBack;
