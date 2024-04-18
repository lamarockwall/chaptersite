import React, { useRef, useState } from "react";



const Contact = ({ classicHeader, darkTheme }) => {
  const downloadPDF = () => {
    // Generate your PDF content or fetch it from a server
    const pdfContent = "/images/LAMAMembershipApplication_RW.pdf";
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "LAMAMembershipApplication_RW.pdf";
    document.body.appendChild(link);
    link.click();
  
  };

  return (
    <section
      id="contact"
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
            L.A.M.A.
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-4 col-xl-12 order-1 order-md-0 text-center text-md-middle">
          <h3
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Welcome to the LAMA family! Reach out to us below, or connect with us on Facebook, Instagram, or simply by saying hello if you spot us out on the road. Remember, at LAMA, we're all about building bonds and welcoming everyone into our family, so don't be shy – come say hi!

Join us for an adventure-packed ride or immerse yourself in the warmth of our meetings, where you'll discover the true heart of our community and have the chance to share in our experiences. We're here to make you feel right at home!
<br></br>

Ready to take the plunge and become a part of our vibrant community? It's as easy as filling out a membership application. Once you've taken that exciting step and submitted your application, get set to embark on your journey with us by paying an initial membership fee. This fee not only covers your yearly international membership dues but also gets you started with our special international member patch and the exciting prospect patch. Get ready to dive in – we can't wait to welcome you aboard!
            </h3>
            <button className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2" onClick={downloadPDF}>Membership Application</button>
          </div>
          <div className="col-md-4 col-xl-12 order-1 order-md-0 text-center text-md-middle">
            
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Email or Text 
            </h2>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
            <span className="text-primary text-4 me-2">
                 Business Manager Daniel Molina
              </span>
            </p>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              lamarockwallbm@gmail.com
              <br></br>
              480-800-7959
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow US
            </h2>
            
             
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
