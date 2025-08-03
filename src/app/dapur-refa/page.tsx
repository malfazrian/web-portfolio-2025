import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Script from "next/script";
import Image from "next/image";

export default function DapurRefa() {
  return (
    <div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://kit.fontawesome.com/00b3d9e6d1.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light text-uppercase fw-bold px-5 shadow sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="brand-wr pe-4">
                <div className="brand-logo-wr">
                  <Image
                    className="brand-logo"
                    src="/dapur-refa/D.png"
                    alt="Dapur Refa logo"
                  />
                </div>
                <span className="brand-text fw-normal">Dapur Refa</span>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Menu
                </a>
              </div>
              <a className="btn btn-primary ms-auto" href="#" role="button">
                <i className="fa-brands fa-whatsapp"></i>Order
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide min-vh-50"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src="/dapur-refa/banner1.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/dapur-refa/banner2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/dapur-refa/banner3.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="p-5 my-5 text-center">
              <h1 className="display-3 fw-bold">
                Made with love, fresh out of the kitchen
              </h1>
              <h3 className="fw-normal">
                Dapur Refa is newly established pastry and food, based in South
                Jakarta
              </h3>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div>
              <h3 className="text-center">Our Products</h3>
              <div className="row d-flex align-items-stretch">
                <div className="product col-lg-4 col-sm-6 my-2">
                  <a
                    className="text-reset text-decoration-none"
                    href="google.com"
                  >
                    <div className="card h-100">
                      <Image
                        src="/dapur-refa/Nastar.png"
                        className="card-img-top"
                        alt="prod-img"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Lebaran Cookies</h5>
                        <p className="card-text">
                          Exclusive Eid al-Fitr day offer
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="product col-lg-4 col-sm-6 my-2">
                  <div className="card h-100">
                    <Image
                      src="/dapur-refa/Brownies.png"
                      className="card-img-top"
                      alt="prod-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Brownies</h5>
                      <p className="card-text">
                        Perfect for sharing in special events.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="product col-lg-4 col-sm-6 my-2">
                  <div className="card h-100">
                    <Image
                      src="/dapur-refa/ayam bakar.png"
                      className="card-img-top"
                      alt="prod-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Grilled Chicken</h5>
                      <p className="card-text">A true Masterpiece in Taste.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div
              id="carouselExampleDark"
              className="carousel carousel-light slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="testimony container d-flex flex-column align-items-center justify-content-center">
                    <span className="pb-3">⭐⭐⭐⭐⭐</span>
                    <h4 className="pb-3">
                      The Nastar Cookie from Dapur Refa is absolutely delicious!
                      It&apos;s the perfect balance of sweetness and buttery
                      goodness.
                    </h4>
                    <div>
                      <div className="d-flex">
                        <div className="profil-wrap">
                          <Image
                            className="profil-img"
                            src="https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                        <div className="p-3 m-auto">
                          <p className="fw-bold mb-0">Winarsih</p>
                          <p>My Mom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="testimony container d-flex flex-column align-items-center justify-content-center p-5">
                    <span className="pb-3">⭐⭐⭐⭐⭐</span>
                    <h4 className="pb-3">
                      The grilled chicken from Dapur Refa is absolutely
                      delicious! It&apos;s perfectly tender and seasoned to
                      perfection.
                    </h4>
                    <div>
                      <div className="d-flex">
                        <div className="profil-wrap">
                          <Image
                            className="profil-img"
                            src="https://plus.unsplash.com/premium_photo-1664530452451-6f37c146af23?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                        <div className="p-3 m-auto">
                          <p className="fw-bold mb-0">Ryan</p>
                          <p>My Husband</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimony container d-flex flex-column align-items-center justify-content-center p-5">
                    <span className="pb-3">⭐⭐⭐⭐⭐</span>
                    <h4 className="pb-3">
                      The brownies from Dapur Refa are absolutely delicious!
                      They&apos;re perfectly moist and chocolatey, a true
                      delight.
                    </h4>
                    <div>
                      <div className="d-flex">
                        <div className="profil-wrap">
                          <Image
                            className="profil-img"
                            src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"
                            alt=""
                          />
                        </div>
                        <div className="p-3 m-auto">
                          <p className="fw-bold mb-0">Manaf</p>
                          <p>My Dad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section id="cta">
          <div className="container testimony row m-auto">
            <div className="col-lg-6 p-5 m-auto">
              <h2>Discover Our Delicious Homemade Treats</h2>
              <p>
                Indulge in our mouthwatering Nastar Cookies, Brownies, and
                Grilled Chicken dishes.
              </p>
              <div>
                <button className="btn btn-lg btn-primary">Order</button>
                <button className="btn btn-lg btn-secondary">Explore</button>
              </div>
            </div>
            <div className="col-lg-6 m-auto">
              <div className="container">
                <Image
                  className="w-100 h-100"
                  src="https://images.unsplash.com/photo-1603632964293-a9834b269a40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Refa's Picture"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer pt-5">
        <div className="custom-shape-divider-top-1708349281">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container row py-5">
          <div className="brand col-lg-3 col-md-12">
            <Image
              className="brand-logo"
              src="/dapur-refa/D.png"
              alt="Dapur Refa logo"
            />
            <span className="brand-text fs-2">Dapur Refa</span>
          </div>
          <div className="contacts col-lg-3 col-md-4">
            <h3>Dapur Refa</h3>
            <p>About Us</p>
            <p>Stores</p>
            <p>Contact </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <h3>Help Center</h3>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-lg-3 col-md-4">
            <h3>Contact Us</h3>
            <p>
              <i className="fa-solid fa-phone"></i>+62 851 7305 0943
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i>DapurRefa
            </p>
            <p>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              Dapur Refa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
