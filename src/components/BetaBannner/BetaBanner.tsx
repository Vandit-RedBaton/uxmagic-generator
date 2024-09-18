import React from 'react'

const BetaBanner = () => {
  return (
    <div className='w-fit mx-auto'>
       <div className="bg-betaBanner rounded-md p-1 flex w-full gap-3 items-center justify-center">
         <div className="bg-black text-white p-1 rounded">
            Beta
         </div>
         <div className="text-primary">
         This version supports Website components only.
         </div>
       </div>
    </div>
  )
}

export default BetaBanner