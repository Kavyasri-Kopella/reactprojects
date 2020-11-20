import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="wt-section bg-dark main-footer">
        <div className="container">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4 col-12 col mb-4">
              <h5 className="mb-4">Reach us</h5>
              <p>
                <i className="fa fa-location-arrow mr-2" /> #123, Manhatt 7
                Avenu, NYC{' '}
              </p>
              <p>
                <i className="fa fa-phone mr-2" /> +1-1234-567-987
              </p>
              <p>
                <i className="fa fa fa-envelope mr-2" /> info@yourdomain.com
              </p>
            </div>
            <div className="col-sm-4 col-md  col-6 col mb-4">
              <h5 className="mb-4">Site links</h5>
              <ul className="list-inline">
                <li className="list-block-item mx-2">
                  <a href="#">Home</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">About Us</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">Services</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">Portfolio</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md  col-6 col mb-4">
              <h5 className="mb-4">Quick links</h5>
              <ul className="list-inline">
                <li className="list-block-item mx-2">
                  <a href="#">Blog</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-block-item mx-2">
                  <a href="http://webthemez.com">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md  col-12 col mb-4">
              <h5 className="mb-4">Follow us</h5>
              <ul className="social_footer_ul list-inline text-left mb-0">
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pt-4">
              <p className="text-center copyrights">
                <a
                  className="text-white"
                  href="https://webthemez.com/free-bootstrap-templates/"
                >
                  Bootstrap Theme
                </a>{' '}
                by WebThemez. <br />© All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  )
}

export default Footer
