import React from 'react'
import img from '../../img/intro/team.jpg'

const BodyHome = () => {
  return (
    <>
      <main role="main">
        <section className="wt-section">
          <div className="container">
            <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
              <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
                <h2 className="mb-md-2">Our Services</h2>
                <p className="lead text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="bg-white p-4 mb-4 text-center border rounded-md py-5"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay={50}
                >
                  <div className="mb-4">
                    <img src={img} width="80px" alt="" />
                  </div>
                  <h5 className="mb-2">Consulting</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                    eiusmod Lorem ipsum dolor sit ametelit.
                  </p>
                  <a href="#" className="btn btn-pill btn-primary mt-4">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="bg-white p-4 mb-4 text-center border rounded-md py-5"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay={150}
                >
                  <div className="mb-4">
                    <img
                      src="./assets/img/services/2.svg"
                      width="80px"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2">Finance</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                    eiusmod Lorem ipsum dolor sit ametelit.
                  </p>
                  <a href="#" className="btn btn-pill btn-primary mt-4">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="bg-white p-4 mb-4 text-center border rounded-md py-5"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay={200}
                >
                  <div className="mb-4">
                    <img src="assets/img/services/3.svg" width="80px" alt="" />
                  </div>
                  <h5 className="mb-2">Technology</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                    eiusmod Lorem ipsum dolor sit ametelit.
                  </p>
                  <a href="#" className="btn btn-pill btn-primary mt-4">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wt-section bg-light">
          <div className="container">
            <div className="row justify-content-md-center text-center">
              <div
                className="col-md-8"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay={50}
              >
                <h1 className="mb-md-4">Get all type of Solutions</h1>
                <p className="lead text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </p>
                <div className="mt-md-5">
                  <a href="#" className="btn btn-primary btn-pill">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wt-section">
          <div className="container">
            <div
              className="row justify-content-md-center align-items-center text-center mb-lg-5 mb-4 pb-lg-5"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay={50}
            >
              <div className="col-md-6 px-md-5">
                <i className="fab fa-connectdevelop display-4 text-primary mb-4" />
                <h2 className="mb-md-4 mt-3">
                  We are Top Consulting Firm in the World
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet
                </p>
                <div className="mb-md-5 mb-4">
                  <a href="#" className="btn btn-primary btn-pill">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <img className="rounded mw-100" src={img} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="card bg-primary border-0 rounded-0 p-5">
          <div className="container">
            <div
              className="row justify-content-between align-items-center text-center text-md-left"
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-delay={50}
            >
              <div className="col-md-8">
                <h5 className="mb-1">
                  The best business consultancy services in world
                </h5>
                <p className="mb-0">
                  There are many variations of passages of Lorem Ipsum available
                  the majority alteration.
                </p>
              </div>
              <div className="col-md-4 text-lg-right mt-md-0 mt-3">
                <a
                  href="contact.html"
                  className="btn btn btn-outline-light btn-pill"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wt-section pb-0">
          <div className="container">
            <div
              className="row justify-content-between align-items-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-delay={50}
            >
              <div className="col-md-5">
                <h2 className="mb-4">Industry leader in consulting services</h2>
                <p className="text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Eius eligendi
                  fugiat!
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="./assets/img/intro/img-woman-1.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <section className="wt-section bg-light">
          <div className="container">
            <header className="text-center w-md-50 mx-auto mb-5">
              <h2 className="h1 mb-0">Our Clients</h2>
            </header>
            <div
              className="js-clients wt-clients mb-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay={50}
            >
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img1.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img4.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img2.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img3.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img7.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img5.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img6.png"
                  alt="Image Description"
                />
              </div>
              <div>
                <img
                  className="wt-clients__image"
                  src="./assets/img/clients/img8.png"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BodyHome
