import React from "react";

const Swr = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "LAMA SAN JOSE",
      icon: "/images/sanjose.jpeg",
      href: "https://www.facebook.com/lama.sanjose",
    },
    {
        name: "LAMA LOS ANGELES",
        icon: "/images/la.jpeg",
        href: "https://www.facebook.com/lamalosangeles",
      },
      {
        name: "LAMA GILBERT AZ",
        icon: "images/gilbert.jpeg",
        href: "https://www.facebook.com/lama.gilbertaz",
      },
      {
        name: "LAMA YUMA AZ",
        icon: "/images/yuma.jpeg",
        href: "https://www.facebook.com/profile.php?id=100074970545309",
      },
      {
        name: "LAMA PHOENIX AZ",
        icon: "/images/phoenix.jpeg",
        href: "https://www.facebook.com/profile.php?id=100084371597445",
      },
      {
        name: "LAMA MESQUITE",
        icon: "/images/mesquite.jpeg",
        href: "https://www.facebook.com/profile.php?id=100067477597773",
      },
      {
        name: "LAMA FORT WORTH",
        icon: "/images/ft worth.jpeg",
        href: "https://www.facebook.com/profile.php?id=100093406022688",
      },
      {
        name: "LAMA HOUSTON",
        icon: "/images/houston.jpeg",
        href: "https://www.facebook.com/profile.php?id=61555590493807",
      },
      {
        name: "LAMA AUSTIN",
        icon: "/images/austin.jpeg",
        href: "https://www.facebook.com/profile.php?id=100080609326741",
      },
      {
        name: "LAMA DALLAS",
        icon: "/images/dallas.png",
        href: "https://www.facebook.com/LamaOfDallas",
      },
      {
        name: "LAMA LAWTON FT. SILL",
        icon: "/images/lawton.jpeg ",
        href: "https://www.facebook.com/lama.lawton.ft.sill",
      },
  ];
  const handleClick = (href) => {
    // Open a new window with the specified href
    window.open(href, "_blank");
  };


  return (
    <section
      id="swr"
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
            SouthWest Region
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <p>
            The Rockwall Chapter is part of the Southwest Region. Click the logos below for information regarding the other chapters in the region. 
            </p>
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
                        <a onClick={() => handleClick(service.href)}>
                        <img
                className=" img-thumbnail d-block"
                src={service.icon}
                title=""
                alt="profile"
                
              />
              </a>
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

export default Swr;
