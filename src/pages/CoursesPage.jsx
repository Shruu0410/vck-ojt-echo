import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div className="page-container" style={{ overflow: "auto" }}>
      <h1>Our Academic Programs</h1>
      <p>
        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape.
      </p>

      <h2>Discover Campus Life</h2>
      <div className="video-container">
        <hr />
        <video controls width="100%" height="auto" className="course-video">
          <source src="\Videos\college-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">
          Get a glimpse of the vibrant academic and social life at Vivekanand College.
        </p>
      </div>

      <h2>Undergraduate Programs (UG)</h2>
      <hr />
      <ul>
        <li>Bachelor of Science (B.Sc.)</li>
        <ul>
          <li>Computer Science (3 years)</li>
          <li>Information Technology (3 years)</li>
          <li>Biotechnology (3 years)</li>
        </ul>
        {/* Other undergraduate programs */}
      </ul>

      <h2>Postgraduate Programs (PG)</h2>
      <hr />
      <ul>
        <li>Master of Science (M.Sc.)</li>
        <ul>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
        </ul>
        {/* Other postgraduate programs */}
      </ul>

      <h2>Program Details & Fee Structure (Annual)</h2>
      <hr />
      <table className="admissions-table course-details-table">
        <thead>
          <tr>
            <th>Program Type</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Annual Fee (INR)</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          {/* Program details rows */}
        </tbody>
      </table>

      <h2>Specialized & Vocational Courses</h2>
      <hr />
      <p>
        In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development.
      </p>

      <div className="call-to-action">
        <p>Have questions about a specific course?</p>
        <Link to="/contact" className="btn">
         Inquire About Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesPage;

