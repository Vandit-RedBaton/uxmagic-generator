import React from 'react'

const GenerateButton = ({onClick , disabled , children} : any) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${disabled ? 'bg-notActive' : 'bg-primary'} text-white w-full py-2 px-4 rounded flex items-center cursor-pointer justify-center gap-2 transition-all duration-100 `}>
      {children}
    </button>
  )
}

export default GenerateButton