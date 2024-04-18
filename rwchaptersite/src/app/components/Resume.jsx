import React from "react";


const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      
      title: "Chapter",
      desc: "Membership in L.A.M.A. is open to individuals who own a motorcycle with a 600 cc or greater, hold a valid motorcycle driver's license, and current motorcycle insurance.  The uniform consists of black boots, denim blue jeans, a black T-shirt (minimum 70% black), and a black leather vest with the appropriate membership patches sewn on in their proper locations.",
    },
    {
      
      title: "Spousal",
      desc: "Spousal members qualify to wear the same membership patches (logo) as active members. If the active member wears a “P” patch, the spousal member wears the same. If the active member wears full colors, the spousal member wears the same.  Spousals also wear the uniform consisting of black boots, denim blue jeans, a black T-shirt (minimum 70% black), and a black leather vest.",
    },
    {
      
      title: "Associate",
      desc: "An associate member supports L.A.M.A. but may not have the time to fulfill the requirements of a chapter member. Associate members participate in L.A.M.A. activities but do not wear “colors” and wear the distinctive International Associate member's patch and yearly renewal rocker.  Associates are not required to adhere to uniform requirements.",
    },
    {
      
      title: "Youth",
      desc: "Youth membership may be extended to children under the age 18 years.  Youth members wear an honorary patch on the back of the vest.  There are no fees associated with youth memberships.",
    },
  ];



  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            L.A.M.A
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Memberships
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Types of Memberships
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
          <img
                className="img-fluid"
                src="images/colors.webp"
                title="colors"
                alt="profile"
              />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Resume;
