import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Background from '../bg1.jpg'

class Profile extends Component {
   render(){
      return(
         <React.Fragment>
            <div className="container-fluid h-80">
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
               <div className="row h-100">
                  <div className="col-12-lg justify-content-center d-flex align-items-center h-100">
                     <div className="row justify-content-center ">
                        <img src={Background} className="rounded-circle border-0 p-0" id="ppProfile" alt=""/>
                        <h5 className="text-success">
                           A. Khaidir Muktamar
                        </h5>
                        <p className="text-secondary">
                           Musyrif
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Profile;