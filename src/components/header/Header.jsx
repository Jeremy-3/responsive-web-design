import { MdMail } from "react-icons/md";
import Navbar from "../navbar/Navbar.jsx";
import { IoIosSearch } from "react-icons/io";
import { PiPhoneCall } from "react-icons/pi";
import MobileNavbar from "../navbar/MobileNavbar.jsx";

function Header() {
  return (
    <header className="flex flex-col p-4">
      <div className="flex justify-around p-4">
        <img src="https://placehold.co/100x30/black/white" alt="Page Logo" />

        <div className="hidden items-center gap-4 md:flex">
          {/*Search Bar*/}
          <div className="flex items-center gap-2 border-b-2 border-black">
            <label htmlFor="search">
              <IoIosSearch />
            </label>
            <input type="text" placeholder="Search here" id="search" className="outline-none"/>
          </div>

          {/*Contact Info*/}
          <div className="px-4 flex items-center gap-4">
            <a href="mailto:example@mail.com" target="_blank"
            className="flex items-center gap-2"
            >
                
            <MdMail/> <span> example@mail.com</span> 
            </a>
            <a href="tel:(000) 888-88"
            className="flex items-center gap-2"
            >
             <PiPhoneCall />   <span>(000) 888-88</span></a>
          </div>
        </div>
      </div>

      <Navbar />

      <MobileNavbar/>
    </header>
  );
}

export default Header;
