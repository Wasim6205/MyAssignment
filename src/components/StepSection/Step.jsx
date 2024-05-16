import React from "react";
import "./Step.css";

const Step = () => {
  return (
    <section className="step-section">
      <h3>How does it work?</h3>
      <div className="top-section">
        {/* <div className='step-bar'>
                <div>Step1</div>
                <hr />
                <div>Step2</div>
                <hr />
                <div>Step3</div>
            </div> */}
        <div className="step-cards">
          <div className="step-card">
            <h4 className="step-card-heading">
              Step 1: Enroll into your favorite course for only $1,499
            </h4>
            <div className="step-card-subheading">
              <h5>2</h5>
              <p>Years time from the date of enrollment</p>
            </div>
            <p className="step-card-title">
              Finish the course within 2 Years to Quality for Refund.
            </p>
          </div>
          <div className="step-card">
            <h4 className="step-card-heading">
              Step 2: Enroll into your favorite course for only $1,499
            </h4>
            <div className="step-card-subheading">
              <h5>2</h5>
              <p>Years time from the date of enrollment</p>
            </div>
            <p className="step-card-title">
              Finish the course within 2 Years to Quality for Refund.
            </p>
          </div>
          <div className="step-card">
            <h4 className="step-card-heading">
              Step 3: Enroll into your favorite course for only $1,499
            </h4>
            <div className="step-card-subheading">
              <h5>100%</h5>
              <p>Enrollment Fee is refunded</p>
            </div>
            <p className="step-card-title">
              Finish the course within 2 Years to Quality for Refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
