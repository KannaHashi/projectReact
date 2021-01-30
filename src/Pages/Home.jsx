import { faBan, faChevronRight, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import logo from "./../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"

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
                     <li className="breadcrumb-item active" aria-current="page">Profile</li>
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
                     <div className="row rowProfile-px mx-2">
                        <h3 className="text-dark text-start">Crud</h3>
                     </div>
                     <div className="row rowProfile-px py-3 justify-content-around h-50">
                        <Link to="#crudsantri" className="col mxx-3 shadow rounded">
                           <div className="card border-0 justify-content-center">
                              <img src={Wavy} style={{width: "50%"}} alt="" className="d-flex align-self-center"/>
                              <br/>
                              <h5 className="text-secondary">
                                 Crud Santri
                              </h5>
                           </div>
                        </Link>
                        <Link to="#crudsantri" className="col mxx-3 shadow rounded">
                           <div className="card border-0 justify-content-center">
                              <img src={Wavy} style={{width: "50%"}} alt="" className="d-flex align-self-center"/>
                              <br/>
                              <h5 className="text-secondary">
                                 Crud Musrip
                              </h5>
                           </div>
                        </Link>
                        <Link to="crudguru" className="col mxx-3 shadow rounded">
                           <div className="card border-0 justify-content-center">
                              <img src={Wavy} style={{width: "50%"}} alt="" className="d-flex align-self-center"/>
                              <br/>
                              <h5 className="text-secondary">
                                 Crud Guru
                              </h5>
                           </div>
                        </Link>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card">
                        <div className="card-body p-3">
                           <div className="card bg-light justify-content-center p-3" style={{verticalAlign: "middle"}}>
                              <p className="text-secondary m-0">hahahah</p>
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