import React, { Component } from "react";
import logo from "./../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../undrawSetoran.svg"
import Gadget from "./../undrawGadget.svg"

class Home extends Component {
   render(){
      return(
         <React.Fragment>
            <div className="container-fluid pb-5">
               <nav aria-label="breadcrumb" className="bc">
                  <ol className="breadcrumb">
                     <li className="mx-1 breadcrumb-item" aria-current="page">Home</li>
                     <li className="mx-1">
                        <FontAwesomeIcon icon={faChevronRight} />
                     </li>
                     <li className="mx-1 breadcrumb-item" aria-current="page">
                        <Link to="/" className="links">Home</Link>
                     </li>
                     <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
               </nav>
               <div className="row text-center rowProfile-px py-4 mb-2">
                  <div className="col-9 m-0 h-80">
                     <div className="row rowProfile-px pb-4">
                        <div className="card p-4 bg-lgreen-gradient-start border-0 rounded shadow">
                           <div className="card-body p-0">
                              <div className="row">
                                 <div className="cols-8 text-start text-light p-4 align-items-center d-flex">
                                    <div className="row h-100">
                                       <h4>Selamat Datang, Khaidir!</h4>
                                       <p className="py-0">Ada 3 Santri yang belum menyetorkan hafalan baru hari ini!</p>
                                    </div>
                                 </div>
                                 <div className="cols-4 p-3 align-items-center d-flex">
                                    <img id="egretIcon" src="http://egret-react.ui-lib.com/assets/images/illustrations/designer.svg" alt=""/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row rowProfile-px my-3" id="st">
                        <div className="col-12-lg p-0 justify-content-start">
                           <div className="card border-top border-0">
                              <div className="card-body text-start border-top">
                                 <h5 className="bg-white" id="mt-min-15">Setoran Terakhir</h5>
                                 <div className="my-3 p-3">
                                    <p className="">Hanief Lathan</p>
                                    <p className="">Hanief Lathan</p>
                                    <p className="">Hanief Lathan</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row rowProfile-px my-3" id="fitur">
                        <div className="col-11 p-0 justify-content-end">
                           <div className="card border-top border-0">
                              <div className="card-body text-end">
                                 <h5 className="mt-min-15 py-2 text-center rounded-pill bg-info w-10 text-light">Fitur</h5>
                                 <div className="my-3 p-3">
                                    <div className="row justify-content-end d-flex align-items-center py-3">
                                       <div className="col-11">
                                          <div className="card card-info border-0 shadow-sm rounded">
                                             <div className="row h-100 d-flex align-items-center">
                                                <div className="col-9">
                                                   <h4 className="">Setoran Hafalan</h4>
                                                   <p className="text-muted">Mengontrol Hafalan Alquran dan Hadits Santri</p>
                                                </div>
                                                <div className="col-3">
                                                   <img src={Setoran} className="card-info-img" alt=""/>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-1 p-0 me-min-15">
                                          <h5 className="alert alert-primary text-center rounded-pill py-3">1</h5>
                                       </div>
                                    </div>
                                    <div className="row justify-content-end d-flex align-items-center py-3">
                                       <div className="col-11">
                                          <div className="card card-info border-0 shadow-sm rounded">
                                             <div className="row h-100 d-flex align-items-center">
                                                <div className="col-9">
                                                   <h4 className="">Perizinan Gadget</h4>
                                                   <p className="text-muted">Izin Untuk Menggunakan Laptop dan Handphone Bagi Santri</p>
                                                </div>
                                                <div className="col-3">
                                                   <img src={Gadget} className="card-info-img" alt=""/>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-1 p-0 me-min-15">
                                          <h5 className="alert alert-danger text-center rounded-pill py-3">2</h5>
                                       </div>
                                    </div>
                                    <div className="row justify-content-end d-flex align-items-center py-3">
                                       <div className="col-11">
                                          <div className="card card-info border-0 shadow-sm rounded">
                                             <div className="row h-100 d-flex align-items-center">
                                                <div className="col-9">
                                                   <h4 className="">Setoran Hafalan</h4>
                                                   <p className="text-muted">Mengontrol Hafalan Alquran dan Hadits Santri</p>
                                                </div>
                                                <div className="col-3">
                                                   <img src={Setoran} className="card-info-img" alt=""/>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-1 p-0 me-min-15">
                                          <h5 className="alert alert-success border-0 text-center rounded-pill py-3">3</h5>
                                       </div>
                                    </div>
                                    {/* <p className="">Hutang Hafalan Santri</p>
                                    <p className="">Hafalan Santri</p>
                                    <p className="">Laporan</p> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-1 p-0 border-start"></div>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card position-fixed mt-min-10">
                        <div className="card-body p-3">
                           <div className="card bg-light justify-content-center p-5" style={{verticalAlign: "middle"}}>
                              <h6 className="text-secondary my-3">
                                 Anda Login Sebagai :
                              </h6>
                              <h5 className="text-success">
                                 Musyrif
                              </h5>
                              <button className="btn btn-lgreen d-flex align-self-center justify-content-center mt-3">
                                 <Link to="/profile" className="links text-btn-white">
                                    Lihat Profil
                                 </Link>
                              </button>
                           </div>
                           <div className="text-start my-3">
                              <div className="card bg-transparent border-0 p-0">
                                 <a href="#st" className="links link-secondary list-fitur">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Setoran Terakhir</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                                 <a href="#fitur" className="links link-secondary list-fitur">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Fitur</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                                 <a href="#fitur" className="links link-secondary list-fitur">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Fitur</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Home;