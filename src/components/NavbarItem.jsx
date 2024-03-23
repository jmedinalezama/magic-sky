export function NavbarItem({ href, text, handleClick }) {
  return (
    <li>
      <a href={href} onClick={handleClick}
        className={`
          text-white font-bold
          hover:bg-[#00FFF0]
          hover:text-black
          transition duration-300
          block
          rounded-md py-1 px-4`}>
        { text }
      </a>
    </li>
  )
}
