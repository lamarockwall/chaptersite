import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "PRESIDENT",
      desc: "My journey with the organization started in 2017 while living in the Northeast. On 2021 I took a plunge and move to Texas looking for better opportunities and decided to join LAMA in Texas where I continue to meet new individuals thru motor tourism. Currently I hold the President position of the great LAMA Rockwall chapter.",
      icon: "/images/jose.jpeg",
    },
    {
      name: "VICE PRESIDENT",
      desc: "From the vibrant island of Puerto Rico, I am a proud mother of two wonderful children. From my early years, I cultivated a passion for motorcycles, a love that has remained throughout my life's journey. During my time in Puerto Rico, I was involved in various motorcycle clubs, immersing myself in the camaraderie and thrill of the riding community.However, life's twists led me to relocate to Texas, where fate brought me to LAMA Rockwall. Embracing the opportunity to create new connections and create memories, I took a leap of faith and became a part of this community. Today, the friends I've made at LAMA Rockwall have become my second family, providing support and companionship, making Texas feel like home away from home..",
      icon: "/images/maria.jpeg",
    },
    {
      name: "SECRETARY",
      desc: "I am Pancho LAMA Rockwall secretary. Love to do outdoor activities and ride my motorcycle Love doing charity work and volunteering. Have a lovely wife and four  amazing children.",
      icon: "/images/pancho.jpeg",
    },
    {
      name: "TREASURER",
      desc: "Hello all! I have many nicknames but the two popular are Davgie and Rubia. I was born in Carolina, PR and moved to the Bronx at a young age. I’m a mama to two beautiful kids and a wife. I’m a lover of many things especially riding! There’s something so liberating about it! I am shy when you meet me but once I get comfortable I break out my shell! Excited to see the great things we do at Lama Rockwall!!.",
      icon: "/images/davgi.jpeg",
    },
    {
      name: "BUSINESS MANAGER",
      desc: "I'm Daniel Molina aka Sucio! Outside of motorcycle riding, I have an amzing wife  and 4 kids! And I love watching Football Go Dolphins!",
      icon: "/images/danny.jpeg",
    },
    {
      name: "MOTO-TOURING OFFICER",
      desc: "Hi, my name is Roberto Alverio aka(Cano) I have been with L.A.M.A. for 12 years, I ride a 2016 road glide ultra. I enjoy riding my bike and enjoy being part of this family. I also like spending time with my family, love fishing, and foremost, I love my God.",
      icon: "/images/cano2.jpeg",
    },
    {
      name: "SEARGENT AT ARMS",
      desc: "I’m Thomas Kent, aka Big T. I love spending time with the wife and kids and bodybuilding!",
      icon: "/images/thomas.jpeg",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            L.A.M.A.
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            ROCKWALL BOARD MEMBERS
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <img
                className=" img-thumbnail d-block"
                src={service.icon}
                title=""
                alt="profile"
              />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
