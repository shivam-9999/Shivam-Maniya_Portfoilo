import React, { Fragment } from "react";

function Experience() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Shivam Virjibhai Maniya</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">Freelancer</h4>
                  <h6 className="blue-label px-2 py-1">May 2022 - Present</h6>
                  <p className="m-0">Work from home · Part-time</p>
                  <p>Totonto, Canada</p>
                </li>

                <li>
                  <h4 className="ff-jose my-1 text-red">Software developer</h4>
                  <h6 className="blue-label px-2 py-1">Oct 2020 - Dec 2021</h6>
                  <p className="m-0">Exomoon Infotech · Full-time</p>
                  <p>Surat, Gujarat, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                  <h6 className="blue-label px-2 py-1">Dec 2020 - Sept 2020</h6>
                  <p className="m-0">
                    Tvadartham Technology Pvt Ltd, India · Internship
                  </p>
                  <p>Surat, Gujarat, India</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Advanced Diploma - Software Engineer
                  </h4>
                  <h6 className="blue-label px-2 py-1">Jan 2022- Jan 2023</h6>
                  <p className="m-0">Centennial College</p>
                  <p>GPA: 3.37/4.5</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    BE - Computer Engineering
                  </h4>
                  <h6 className="blue-label px-2 py-1">2016 - 2020</h6>
                  <p className="m-0">Gujarat Technological University</p>
                  <p>CGPA: 7.2/10</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <h1>
                coming soon
                {/* <a href="https://www.codechef.com/users/yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/Yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a>  */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Experience;
