import React from "react";
import PropTypes from "prop-types";

export const NavLeft = ({ backLink, sliding = false, className }) => {
  const classNames = `left ${sliding ? "sliding" : ""} ${className
    ? className
    : ""} `.trim();
  return (
    <div className={classNames}>
      <a className="back link">
        <i className="icon icon-back" />
        <span>
          {backLink}
        </span>
      </a>
    </div>
  );
};

NavLeft.propTypes = {
  backLink: PropTypes.string.isRequired,
  sliding: PropTypes.bool,
  className: PropTypes.string
};

export const NavCenter = ({ sliding = false, className, children }) => {
  const classNames = `center ${sliding ? "sliding" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

NavCenter.propTypes = {
  sliding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const NavRight = ({ className, children }) => {
  const classNames = `right ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

NavRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Navbar = ({ className, children }) => {
  const classNames = `navbar ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      <div className="navbar-inner">
        {children}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Navbar;

// const Navbar = ({ title, backLink, sliding, className }) => {
//   const classNames = `navbar ${className ? className : ''}`.trim()
//   return (
//     <div className={classNames}>
//       <div className="navbar-inner">
//         <NavLeft backLink={backLink} sliding={sliding}></NavLeft>
//       </div>
//     </div>
//   )
// }

// const Navbar = ({ title, backLink, sliding, className }) => {
//   return (
//     <div className="navbar">
//       <div className="navbar-inner">
//         <div className="left sliding">
//           <a href="#" className="back link">
//             <i className="icon icon-back" />
//             <span>Back</span>
//           </a>
//         </div>
//         <div className="center-sliding">My App</div>
//       </div>
//     </div>
//   );
// };

// const Navbar = ({ title, backLink, sliding, className }) => {
//   console.log(title, backLink, sliding);
//   const navbarClassNames = `navbar ${className ? className : ""}`.trim();
//   const backLinkClassNames = `left ${sliding ? "sliding" : ""}`.trim();
//   const titleClassNames = `center ${sliding ? "sliding" : ""}`.trim();
//   return (
//     <div className={navbarClassNames}>
//       {backLink &&
//         <div className="navbar-inner">
//           <div className={backLinkClassNames}>
//             <a href="#" className="back link">
//               <i className="icon icon-back" />
//               <span>
//                 {backLink}
//               </span>
//             </a>
//           </div>
//         </div>}
//       <div className="navbar-inner">
//         <div className={titleClassNames}>
//           {title}
//         </div>
//       </div>
//     </div>
//   );
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   backLink: PropTypes.string,
//   sliding: PropTypes.bool,
//   classNames: PropTypes.string
// };

// export default Navbar;
