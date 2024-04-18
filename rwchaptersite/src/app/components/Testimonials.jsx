import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      Question: "Do I have to be Latino to join L.A.M.A.?",
      Answer: "Most certainly not. All ethnicities are welcome in L.A.M.A.",
    },
    {
      Question: "Do I need to have a motorcycle license?",
      Answer: "Yes, all riders need to be licensed and carry current and valid motorcycle insurance & registration.",
    },
    {
      Question: "Is L.A.M.A. an MC?",
      Answer: "L.A.M.A. is not associated with any MC nor affiliated with MC support clubs.",
    },
    {
      Question: "Does my motorcycle need to be a certain brand?",
      Answer: "Nope! L.A.M.A. accepts all different brands two and three wheels.  Engine size needs to be a minimum of 600cc.",
    },
    {
      Question: "Are females allowed to join L.A.M.A?",
      Answer: "YES!  ALL are welcome!!",
    },
    {
      Question: "Do I have to wear a helmet",
      Answer: "Helmets are only required in states that have helmet laws.  Use of helmets are strongly encouraged.",
    },
    {
      Question: "Do I have to wear a uniform?",
      Answer: "L.A.M.A.'s uniform consists of a black shirt, blue jeans, all black boots and all black leather vest",
    },
    {
      Question: "an my spouse join even if they don't ride on the back of my bike",
      Answer: "Yes!  We have a variety of memberships.  The more the merrier!",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
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
            FAQ
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                   
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.Question}
                      </strong>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.Answer}”
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
