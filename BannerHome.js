import React from 'react'
import img from '../../img/intro/banner-1.jpg'

const BannerHome = () => {
  return (
    <>
      <div>
        <section className="wt-section hero-large position-relative overflow-hidden mt-md-2">
          <div
            className="hero-img bg-overlay"
            data-overlay={0}
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              width: '100%',
              height: '500px',
            }}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay={50}
          />
          <div className="container">
            <div className="row align-items-center my-5">
              <div
                className="col-md-6 py-5"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-delay={100}
              >
                {/* heading */}
                <h1 className="text-uppercase mb-3 display-4 font-weight-bolder">
                  Best Business Services
                </h1>
                <p className="mb-4 h5">Lets Grow Your Business Togather</p>
                <div className=" mb-0">
                  <a
                    href="#"
                    className="btn btn-pill btn-primary mr-3 mb-md-0 mb-3"
                  >
                    Quick Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Header */}
      </div>
    </>
  )
}

export default BannerHome
