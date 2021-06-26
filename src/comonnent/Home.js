import React from 'react'

export default function Home() {
    return (
      <div>
        <>
          <section className="hero-section">
            <div className="hero-carousel">
              <div
                className="item-cont"
                style={{
                  backgroundImage:
                    'url("http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/laundry-service-london.jpg")',
                }}
              >
                <div className="item-inner">
                  <div className="hero-text">
                    <h1>
                      Making Dry Cleaning &amp; Laundry Delivery Easier Than You
                      Think.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
          <div className="our-facility-widgets">
            <div className="container">
              <div className="row">
                <div className="col-md-3 border-right">
                  <div className="facility-widget">
                    <div className="widget-icon">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/vetor-1.png"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      Free Same Day Laundrette Collection &amp; Deliver Your
                      Clean Items In 24 Hours
                    </p>
                  </div>
                </div>
                <div className="col-md-3 border-right">
                  <div className="facility-widget">
                    <div className="widget-icon">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/vector-2.png"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      Experienced Dry Cleaners and Laundrette Service Near Me in
                      London
                    </p>
                  </div>
                </div>
                <div className="col-md-3 border-right">
                  <div className="facility-widget">
                    <div className="widget-icon">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/vector-3.png"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      Place Order Using Our
                      <br /> Mobile App or Website/Call
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="facility-widget">
                    <div className="widget-icon">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/vector-4.png"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      Get 20% Off on <br />
                      Your First Order
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section about-us-section">
            <div className="container">
              <div className="section-title">
                <h2 className="title-underline">About Us</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="section-title-2">
                    <h3>
                      Hello Laundry is ranked #1 by customers in the Faisalabad in
                      categories dry cleaner, laundry service, wash &amp;
                      ironing, alteration and shoes repair.
                    </h3>
                  </div>
                  <p className="mb-0 margin-t4">
                    Hello Laundry is proud to do same day laundry service, dry
                    cleaning and ironing service with free pick-up and delivery
                    within 24 hours in faisalabad .
                  </p>
                  <p className="mb-0 margin-t4">
                    Our driver will come to your address as per your laundry
                    collection time, pick up your clothes, bring them to our
                    facility then our professional dry cleaners and washerman do
                    processing and in less than 24 hours deliver to your
                    doorstep in your delivery schedule.
                  </p>
                  <div className="project-counter">
                    <div className="project-timer-container">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="project-timer">
                            <div className="project-number">
                              <span className="counter">1230</span>
                              <span>+</span>
                            </div>
                            <div className="project-description">
                              <span>Household Laundry</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="project-timer">
                            <div className="project-number">
                              <span className="counter">2140</span>
                              <span>+</span>
                            </div>
                            <div className="project-description">
                              <span>Steam Ironing</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="project-timer">
                            <div className="project-number">
                              <span className="counter">4078</span>
                              <span>+</span>
                            </div>
                            <div className="project-description">
                              <span>Dry Cleaning</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-6 mt-md-0 margin-t4">
                  <div className="video-carousel owl-carousel owl-theme">
                    <a
                      href="#myModal"
                      data-toggle="modal"
                      className="video-player-item"
                      data-video="https://www.youtube.com/embed/Gi5A-QyY7Xk"
                    >
                      <iframe
                        className="slider-iframe"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Gi5A-QyY7Xk"
                        controls={0}
                        showinfo={0}
                      ></iframe>
                    </a>
                    <a
                      href="#myModal"
                      data-toggle="modal"
                      className="video-player-item"
                      data-video="https://www.youtube.com/embed/Bqk-CCnbOdU"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Bqk-CCnbOdU"
                      ></iframe>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section how-it-work">
            <div className="container">
              <div className="section-title txt-white">
                <h2>How We Works</h2>
              </div>
              <div className="row margin-t5">
                <div className="col-md-3">
                  <div className="process-box">
                    <div className="process-img">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/step-1-img.png"
                        className="img-fluid"
                        alt="service-image"
                      />
                    </div>
                    <h3>
                      <span>01.</span> Schedule a Collection
                    </h3>
                    <p>
                      Easily choose pickup and dropoff time slots that work best
                      for you in our mobile apps or website.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-box">
                    <div className="process-img">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/step-2-img.png"
                        className="img-fluid"
                        alt="service-image"
                      />
                    </div>
                    <h3>
                      <span>02.</span> A Driver Arrives
                    </h3>
                    <p>
                      Our drivers bring your items to our cleaning partners,
                      where we take the atmost care to ensure great results.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-box">
                    <div className="process-img">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/expert-processing.jpg"
                        className="img-fluid"
                        alt="service-image"
                      />
                    </div>
                    <h3>
                      <span>03.</span> Expert Processing
                    </h3>
                    <p>
                      We check final quality after washing which is performed to
                      ensure that the highest quality level has been attained.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-box">
                    <div className="process-img after-none before-none">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/step-4-img.png"
                        className="img-fluid"
                        alt="service-image"
                      />
                    </div>
                    <h3>
                      <span>04.</span> Get Clean Laundry
                    </h3>
                    <p>
                      Your clothes come back clean and wrinkle-free on your
                      scheduled delivery date.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
      </div>
    );
}
