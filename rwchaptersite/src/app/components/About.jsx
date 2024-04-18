import React from "react";

const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            L.A.M.A.
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            About
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
               <span className="text-primary">Latin American Motorcycle Association</span>
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            Latin American Motorcycle Association (L.A.M.A.), is a moto- touring association. The association specializes in bringing together motorcycle enthusiasts from around the world, offering riders the opportunity to connect with fellow enthusiasts from different cultures and backgrounds. L.A.M.A. promotes peace, love, harmony, and non-violence worldwide and is known for its inclusivity and acceptance of members from all walks of life.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            L.A.M.A.  organizes recreational activities for its members such as tours, picnics, bike nights, and a host of other social activities that benefit members and open to their families.  Our members are passionate about moto-touring and we take every measure to ensure member safety and protection on the road.  Safety education and enjoying the open road is our goal!
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            L.A.M.A.  does not discriminate based on race, color, nationality, ethnic origins, religion, gender, age, social class, or motorcycle brands.  L.A.M.A. is proud to have female member riders called DAMAS DE L.A.M.A..  DAMAS DE L.A.M.A. ride their own motorcycles, making our association one of the most inclusive and diverse motorcycle associations in the world.  Additionally, female riders hold leadership positions in local, regional, national, and international capacities.  
            </p>
          </div>
          {/* About me content end */}
          
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              
             
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>6</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Continents
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>23</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Countries
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>42</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Areas
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>207</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Chapters
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
