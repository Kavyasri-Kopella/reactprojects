import React from 'react'

const Header = () => {
  return (
    <>
      <div className="hidden-xs hidden-sm nav-top bg-primary py-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="nav-top-contact">
                {/* Social links */}
                <ul className="list-inline text-center text-md-left mb-0">
                  <li className="list-inline-item mx-2">
                    <i className="fa fa-phone" /> +1-1245-678-980
                  </li>
                  <li className="list-inline-item mx-2">
                    <i className="fa fa-envelope" aria-hidden="true" />{' '}
                    info@yourdomain.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 text-right">
              <ul className="list-inline text-center text-md-right mb-0">
                <li
                  className="list-inline-item mx-2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <a target="_blank" href="https://www.facebook.com/webthemez">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <a target="_blank" href="https://www.instagram.com">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <a target="_blank" href="https://twitter.com/webthemez">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li
                  className="list-inline-item mx-2"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Dribbble"
                >
                  <a target="_blank" href="https://dribbble.com">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header className="main-header">
          <div className="container">
            <div className="logo">
              <a href="./index.html">
                <h2>
                  <span>NEU</span>Bizz
                </h2>
              </a>
            </div>
            {/* Navbar */}
            <nav className="mainNav">
              {/* Menu Toggle btn*/}
              <div className="menu-toggle">
                <h3>Menu</h3>
                <button type="button" id="menu-btn">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* Responsive Menu Structure*/}
              {/*Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) */}
              <ul
                id="respMenu"
                className="ace-responsive-menu"
                data-menu-style="horizontal"
              >
                <li>
                  <a href="/" className="active">
                    <span className="title">Home</span>
                  </a>
                </li>
                <li>
                  <a href="./about.html">
                    <span className="title">About Us</span>
                  </a>
                </li>
                <li>
                  <a href="./services.html">
                    <span className="title">Services</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span className="title">Pages</span>
                    <span className="arrow" />{' '}
                  </a>
                  {/* Level Two*/}
                  <ul className="sub-menu" style={{ display: 'none' }}>
                    <li>
                      <a href="./pricing.html">
                        <span className="title">Pricing</span>
                      </a>
                    </li>
                    <li>
                      <a href="./portfolio.html">
                        <span className="title">Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a href="./error.html">
                        <span className="title">404 Page</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">
                    <span className="title">Blog</span>
                    <span className="arrow" />{' '}
                  </a>
                  {/* Level Two*/}
                  <ul className="sub-menu" style={{ display: 'none' }}>
                    <li>
                      <a href="./blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="./blog-single-post.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="last ">
                  <a href="./contact.html">
                    <span className="title">Contact Us</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* End Navbar */}
      </div>
    </>
  )
}

export default Header
