import React from "react";


const Founders = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      
      title: "Meet the founders of LAMA Rockwall Chapter, whose journey is as vibrant as their dedication to their community. ",
      desc: "Our story began in 2017 with the LAMA organization, where fate brought us together amidst the camaraderie of fellow brothers and sisters. As the world navigated the challenges of the pandemic in 2020, we found solace and strength in each other, taking the leap into marriage.The year 2021 marked a pivotal moment as we made the bold decision to uproot from the Northeast and plant our roots in the Southwest, driven by the desire to be closer to our cherished family.In 2023, fueled by our passion for the LAMA community, we embarked on a journey back to our roots. Seeking the guidance of the original founder, Mario Nieves, we humbly requested permission to establish the LAMA Rockwall chapter. With his blessing, LAMA Rockwall was born in July 2023.Since then, our chapter has flourished into a tight-knit family where no one is left behind. We thrive on celebrating each other's successes and offering unwavering support through every twist and turn of life's journey. At LAMA Rockwall, we are not just an organization; we are a real family, united by our shared values and commitment to making a difference in our community. ",
    },
   
  ];



  return (
    <section
      id="founders"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
            Meet the Founders
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
              Jose Lopez & Evangeline Morales
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
                src="images/founders.jpg"
                title="colors"
                alt="profile"
              />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Founders;
