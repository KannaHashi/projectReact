import React from "react";
import { Link } from "react-router-dom";
import Background from '../bg1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({children}) => {
   const OpenNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      nav.style.height = "100%"
      // nav.style.display = "block"
      if (x.matches) {
         nav.style.width = "100%"
      } else {
         nav.style.width = "16.6666666%";
      }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      // navbar.style.marginLeft = "16.6666666%"
      navbar.style.transition = "0.4s"
      navbar.style.width = "83.3333333333333%"
      document.getElementById("fstbtn").style.display = "none"
      document.getElementById("scbtn").style.display = "block"
   }
   const CloseNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      nav.style.width = "0"
      // if (x.matches) {
      //    nav.style.height = "0"
      // }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      navbar.style.width = "100%"
      // nav.style.display = "none";
      document.getElementById("fstbtn").style.display = "block"
      document.getElementById("scbtn").style.display = "none"
      
   }
   var x = window.matchMedia("(max-width: 720px)")

   // const CollapseBtn = () => {
   //    if (x.matches) {
   //       var pp = document.getElementById = "pp"
   //       pp.onclick = function() {OpenNav()}
   //    } else {
   //       return(
   //       )
   //    }
   // }

   const [auth, setAuth] = React.useState(false);
   React.useMemo(() => {
     if (localStorage.getItem("token")) {
       setAuth(true);
     }
   }, []);
   
   const ProfileAuthCondition = () => {
      if (auth === true) {
         return(
            <ul className="navbar-nav" style={{fontSize: "12px"}}>
               <li className="nav-item">
                  <Link className="nav-link" to="/login">
                     Login
                  </Link>
               </li>
            </ul>
         )
      } else {
         return(
            <li className="nav-item bg-lgreen-gradient-start rounded-pill" id="profile">
               <Link className="nav-link" to="/Profile">
                  <span className="">
                     <img src={Background} className="rounded-circle border-0 p-0" id="pp" alt=""/>
                  </span>
                  <span className="mx-s-1 text-light">
                     A. Khaidir Muktamar
                  </span>
               </Link>
            </li>
         )
      }
   }
   // const CloseNav = () => {
   //    document.getElementById("mySideNav").style.width = "0";
   // }
   return (
      <React.Fragment>
         <div className="container-fluid h-100">
            <div className="row h-100 p-0 d-flex justify-content-end">
               <div className="col-2 p-0">
                  <div className="sidenav text-start overflow-auto" id="mySideNav">
                     {/* <img alt="Nyantren"/> */}
                     <div className="p-4 nav-head">
                        <div className="navbar navbar-expand-sm p-0" style={{display: "inline"}}>
                           <ul className="navbar nav justify-content-start">
                              <li className="nav-item px-self-4 h-100">
                                 <span id="close" className="text-light fw-light" onClick={CloseNav}>
                                    <FontAwesomeIcon icon={faTimes} />
                                 </span>
                              </li>
                              <li className="navbar-brand">
                                 <h5 className="m-0">
                                    Nyantren
                                 </h5>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="nav-body p-0 h-70">
                        <div className="row justify-content-center p-4 m-0">
                           <img src={Background} className="rounded-circle border-0 p-0" style={{width: "60px", height: "60px"}} alt=""/>
                           <span className="fw-light text-center mt-3">Khaidir Muktamar</span>
                           {/* <span className="fw-light text-center mt-2" style={{fontSize: "10px", fontWeight: "lighter"}}>Nisn : 0027274810</span> */}
                        </div>
                        <div className="row text-start p-0 mx-0 mt-3 sidelist">
                           <a href="javascript:void(0)" className="listile">Dashboard</a>
                           <a href="javascript:void(0)" className="listile">About</a>
                           <a href="javascript:void(0)" className="listile">Creatifity</a>
                           <a href="javascript:void(0)" className="listile">Account</a>
                        </div>
                        <div className="row justify-content-center d-flex align-items-end h-50">
                           <small className="text-muted text-center">copyright &copy; 2021, Nyantren</small>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="h-100 p-0 float-right overflow-auto" id="navbar">
                  <nav className="navbar navbar-expand-sm navbar-light bg-transparent text-dark py-3 px-2" id="main-navbar">
                     <div className="container-fluid justify-content-between mt-min-13">
                        <button className="border-0 btn-outline-0 mt-2 bg-transparent collapse-button" id="fstbtn" onClick={OpenNav}><span className="navbar-toggler-icon"></span></button>
                        <button className="border-0 btn-outline-0 mt-2 bg-transparent collapse-button" id="scbtn" onClick={CloseNav}><span className="navbar-toggler-icon"></span></button>
                        <div className="float-end row" id="pic2">
                           <ul className="navbar-nav d-flex align-items-center justify-content-end" style={{fontSize: "12px"}}>
                              <li className="nav-item p-2">
                                 <button className="of-0">
                                    <FontAwesomeIcon icon={faBell} className="text-20 text-secondary" />
                                 </button>
                              </li>
                              {ProfileAuthCondition()}
                           </ul>
                        </div>
                     </div>
                  </nav>
                  <div className="py-3 h-100">{children}</div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Navbar;