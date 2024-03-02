import React from 'react'

const Paragraph = ({children}) => {
  return (
    <p className='text-sm md:text-[18px] text-justify leading-6 font-normal text-mainBlack font-montserrat'>{children}</p>
  )
}

export default Paragraph