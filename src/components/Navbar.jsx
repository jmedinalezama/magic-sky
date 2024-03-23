import { BtnMenu } from "./BtnMenu";
import { MenuOpenIcon } from "../icons/MenuOpenIcon.jsx";
import { NavbarItem } from "./NavbarItem.jsx";
import { useState } from "react";
import { MenuCloseIcon } from "../icons/MenuCloseIcon.jsx";


export function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const classNameIsOpen = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' 

  return (
    <nav
      className="fixed top-0 bg-black-100/40 h-16 w-full backdrop-blur-md p-2 z-30"
    >
      <section className="flex justify-between items-center h-full max-w-[1200px] mx-auto">
        <aside>
          <a href="#">
            <span className="text-[#FF00C7] font-black italic text-2xl">Magic</span>
            <span className="text-[#00FFF0] font-black italic text-2xl">Sky</span>
          </a>
        </aside>

        <div className="block md:hidden">
          <BtnMenu handleClick={handleToggleMenu}>
            {
              isOpen
                ? <MenuCloseIcon width={28} height={28} />
                : <MenuOpenIcon width={28} height={28}/>
            }
          </BtnMenu>
        </div>

        <ul className={`
          fixed
          flex flex-col gap-y-4
          right-9 top-16
          bg-[#FF00C7]/80 p-2 rounded-md
          w-40 
          transition duration-500
          ${classNameIsOpen}
          md:static
          md:flex-row md:items-center md:justify-end
          md:bg-transparent
          md:opacity-100 md:pointer-events-auto
          md:w-full
        `}>
          <NavbarItem handleClick={handleToggleMenu} href="#decoraciones" text="Decoraciones"/>
          <NavbarItem handleClick={handleToggleMenu} href="#galeria" text="Galería"/>
          <NavbarItem handleClick={handleToggleMenu} href="#testimonios" text="Testimonios"/>
          <NavbarItem handleClick={handleToggleMenu} href="#nosotros" text="Conócenos"/>
          <NavbarItem handleClick={handleToggleMenu} href="#contacto" text="Contacto"/>
        </ul>
      </section>
    </nav>
  )
}