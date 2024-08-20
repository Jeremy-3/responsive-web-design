import { RxHamburgerMenu } from "react-icons/rx";
import { navMenus } from "./navMenus.js";
import { useState } from "react";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden self-end">
      <button onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </button>
      {isOpen && (
        <nav className="absolute right-4 flex w-fit flex-col gap-2 bg-gray-100 p-4 divide-y divide-gray-500 rounded-xl ">
          {navMenus.map((menu, index) => (
            <a href={menu.link} key={index} className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer">
              <menu.icon />
              {menu.name}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export default MobileNavbar;
