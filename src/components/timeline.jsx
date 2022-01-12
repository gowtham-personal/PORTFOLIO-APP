import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Altimetrik - Paypal Client{" "}
                          <span>(October 2020 - Present)</span>
                        </h2>
                        <h5>Crypto Exchange & Payments: </h5>
                        <p>
                          Worked on Crypto and Payment Domain. Worked on
                          different payment model, AS1, AS2 & sale. Built an end
                          to end Internal Triaging Tool for Crypto Platform in
                          paypal. Worked on Micro service Architecture.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Touch 2 success software solutions{" "}
                          <span>(April 2019 - October 2020)</span>
                        </h2>
                        <h5>Product 1 - FOODHUB: </h5>
                        <p>
                          Online Food Ordering Application Design and
                          Development of base architecture in React and Node.
                          Design and Development of Home, List, Reviews, Profile
                          and 0rder Tracking. Used Aws for Deployment.
                        </p>
                        <h5>Product 2 - MY TAKEAWAY: </h5>
                        <p>
                          Mobile app for managing takeaway by owners. Worked or
                          Promotions and Coupon Management Product.
                        </p>
                        <h5>Product 3 - DELIVERY BY ZONE:: </h5>
                        <p>
                          Design and development of api using Spatial data types
                          in MYSQL. Chrome Extension Creation.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Aspire System <span>(June 2015 - April 2019)</span>
                        </h2>
                        <h5>Stellar UI-ref resh, Insurance Application : </h5>
                        <p>
                          A Tenant based Insurance Solution providers. Design
                          and Development of Policy and claims Module. Q-Pulse,
                          Audit Tracking Application : To track THI and PHA
                          Audit in Aspire. Worked on custom directives,
                          ui-router and Filters in Angular js. Good Domain
                          Knowledge on Insurance Firm. Authentication and
                          Authorization for users. Worked on Build Tools for
                          Angular js Application. (Grunt js, Gulp js)
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
