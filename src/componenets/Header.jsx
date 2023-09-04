import React from "react";
import "../App.css";

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const un = useNavigate();
  useEffect(() => {
    const icons = document.querySelectorAll(".fa-phone");

    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.remove("fa-phone");
        icon.classList.add("fa-phone-volume");
      });
    });
  }, []);
  return (
    <div>
      <nav class="navbar navbar-expand-xl navbar-light">
        <div class="container">
          <Link class="navbar-brand" to={"/"}>
            <img src="./logo.png" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to={"/home"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </Link>
                <ul class="dropdown-menu ol" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item mainli" to={"/home"}>
                      Digital Marketing
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item" to={"/seo"}>
                      Search Engine Optimization (SEO)
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/localseo"}>
                      Local SEO
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/techseo"}>
                      Technical SEO
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/digitalstr"}>
                      Digital Marketing Strategy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/googlean"}>
                      Google Analytics Service
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/franchseo"}>
                      Franchise SEO
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item mainli" to={"/webde"}>
                      Web Design
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />

                  <li>
                    <Link class="dropdown-item" to={"/custom"}>
                      Custom Website Design
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/wordpress"}>
                      WordPress Website Design
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/ecom"}>
                      eCommerce Web Design
                    </Link>
                  </li>

                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item mainli" to={"/socialmedia"}>
                      Social Media Marketing
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />

                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item mainli" to={"/ecommercema"}>
                      eCommerce Marketing
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item" to={"/ecommerceseo"}>
                      eCommerce SEO
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/ecommerceppc"}>
                      eCommerce PPC
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/shopify"}>
                      shopify SEO
                    </Link>
                  </li>

                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item mainli" to={"/amazonmarket"}>
                      Amazon Marketing
                    </Link>
                  </li>
                  <hr class="dropdown-divider" />
                  <li>
                    <Link class="dropdown-item" to={"/amazonbranding"}>
                      {" "}
                      Amazon Storefront & Branding
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WORK
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/casestudy"}>
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/webd"}>
                      Web Designs
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/logodesign"}>
                      Logo Designs
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/video"}>
                      Video
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to={"/whoweare"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/whoweare"}>
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/whycu"}>
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/tgb"}>
                      PROMOTION-360 Gives Back
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/awar"}>
                      Awards and Recognization
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/sce"}>
                      SEO Code of Ethics
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/clienttest"}>
                      Client Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/mediapress"}>
                      Media and Press information
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LEARN
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/blog"}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/webinars"}>
                      Webinars
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to={"/growthformula"}>
                      PROMOTION-360 Growth
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/googlepage"}>
                      Google Page Experience Guide
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to={"/career"}
                >
                  CAREERS
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to={"/contact"}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <i
                class="fa-solid fa-phone form-control
      "
                onClick={() => {
                  alert("GET PROMOTION 360 APP");
                }}
              ></i>

              <i
                class="fa-solid fa-magnifying-glass form-control 
      "
                onClick={() => {
                  prompt("Search This Website");
                }}
              ></i>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
