import React from "react";
import { Input, Button } from "./../Property/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{height: "100%"}}>
        <div className="row rheight-100">
          <div className="col-6 kol-2 text-lgreen">
            <div className="row h-100 d-flex align-items-center justify-content-center">
              <div id="carouselBasicExample" class="h-50 d-flex align-items-center carousel carousel-dark slide col-8" data-bs-ride="carousel">
                <ol class="carousel-indicators mt-2">
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="2"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="3"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="4"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="5"></li>
                </ol>
                <div class="carousel-inner h-100 align-items-end d-flex">
                  <div class="carousel-item active">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Setoran Hafalan</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Hutang Hafalan</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Perizinan Gadget</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Pelanggaran dan Poin Siswa</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Laundry</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                    <div class="mt-10">
                      <h5>Laporan Siswa</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselBasicExample"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselBasicExample"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 bg-lgreen kol-1">
            <div className="row h-0 justify-content-end">
              <a href="/" className="p-4" style={{width: "0"}}>
                <FontAwesomeIcon icon={faArrowRight} className="text-light ab"/>
              </a>
            </div>
            <div className="row align-content-center h-100">
             <div className="col-6 text-start">
               <h1 className="text-light fw-bold">Nyantren</h1>
               <h4 className="text-light">Aplikasi Karya Santri</h4>
               <h5 className="text-start text-light">Masuk</h5>
             </div>
             <div className="mt-2">
             </div>
              <div className="card bg-lgreen border-0">
                <div className="card-body">
                    <div className="input-group border-light border bg-light mrr-2 my-4 rounded">
                      <span className="prr-3 bg-light me-1">
                      <FontAwesomeIcon icon={faEnvelope} className="my-2 text-success bg-light" />
                      </span>
                      <Input className="fc bg-light border-start px-2 text-success" placeholder="email" />
                    </div>
                    <div className="input-group border-light border bg-light mrr-2 my-4 rounded">
                      <span className="prr-3 bg-light me-1">
                      <FontAwesomeIcon icon={faKey} className="my-2 text-success bg-light" />
                      </span>
                      <Input className="fc bg-light border-start px-2 text-success" type="password" placeholder="password" />
                    </div>
                </div>
                  <Button className="btn btn-success mb-2 rounded" label={"Masuk"} style={{width: "50%"}} />
                  <p className="fw-light text-light">
                    Belum punya akun? Daftar <Link to="/register" className="links text-success">disini</Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
