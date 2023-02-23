// import React from 'react'
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import amazon from "../../images/pngimg.com - amazon_PNG11.png"
// import US from "../../images/united-states.png"
// import location from "../../images/location.png"
// import "./Header.css"



// function Header() {
//   return (
//     <div className="outer-wraper">
//       <img className="amazon-logo" src={amazon} alt="amazon-logo-pic" />

//       <div className="delivery">
//         <div className="location-icon">
//           <LocationOnIcon />
//           {/* <img src={location} alt="" /> */}
//         </div>
//         <div className="first-paragraphs">
//           <p className="p1">Deliver to</p>
//           <p className="p2">United Kingdom</p>
//         </div>
//       </div>
//       <div className="search-wraper">
//         <div className="drop-down">
//           <select name="" id="">
//             <option value="">All</option>
//           </select>
//         </div>
//         <div>
//           <input
//             className="search-input"
//             type="text"
//             name=""
//             id=""
//             placeholder="  Search Amazon"
//           />
//         </div>
//         <div className="search-logo">
//           <div className="search-internal">
//             <SearchIcon />
//           </div>
//         </div>
//       </div>
//       <div className="nav">
//         <div className="links">
//           <div className="flag">
//             <div>
//               <img src={US} alt="" />
//             </div>
//             <div className="en">EN</div>
//           </div>
//           <div className="signin">
//             <div className="p1">Hello,signin</div>
//             <div className="p2">Account & Lists</div>
//           </div>
//           <div className="returns">
//             <div className="p1">Returns</div>
//             <div className="p2">& Orders</div>
//           </div>
//           <div className="cart">
//             <span>
//               <ShoppingCartIcon />
//             </span>
//             <span>Cart</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header




import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import amazon from "../../images/pngimg.com - amazon_PNG11.png";
import US from "../../images/united-states.png";
// import location from "../../images/location.png";
import "./Header.css";

function Header() {
  return (
    <div className="outer-wraper">
      <a href="/">
        <img className="amazon-logo" src={amazon} alt="amazon-logo-pic" />
      </a>

      <div className="delivery">
        <div className="location-icon">
          <LocationOnIcon />
          {/* <img src={location} alt="" /> */}
        </div>

        <div className="first-paragraphs">
          <p className="p1">Deliver to</p>
          <p className="p2">United Kingdom</p>
        </div>
      </div>

      <div className="search-wraper">
        <div className="drop-down">
          <select name="" id="">
            <option value="">All</option>
          </select>
        </div>
        <div>
          <input
            className="search-input"
            type="text"
            name=""
            id=""
            placeholder="  Search Amazon"
          />
        </div>
        <div className="search-logo">
          <div className="search-internal">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="links">
        <div className="flag">
          <div>
            <img src={US} alt="" />
          </div>
          <div className="en">EN</div>
        </div>

        <div className="signin">
          <div className="p1">Hello,signin</div>
          <div className="p2">Account & Lists</div>
        </div>

        <div className="returns">
          <div className="p1">Returns</div>
          <div className="p2">& Orders</div>
        </div>

        <div className="cart">
          <div>
            <a href="/checkout">
              <ShoppingCartIcon />
            </a>
          </div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
}

export default Header;