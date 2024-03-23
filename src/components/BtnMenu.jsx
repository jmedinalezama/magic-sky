

export function BtnMenu({children, handleClick}) {
  return (
    <button
      onClick={handleClick}
      className={`flex flex-col border-2 rounded-md border-[#FF00C7] text-[#FF00C7] mr-2`}>
      { children }
    </button>
  )
}