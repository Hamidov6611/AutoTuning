import React from 'react'

const Paragraph = ({children}) => {
  return (
    <p className='text-sm md:text-base font-normal text-mainBlack font-montserrat'>{children}</p>
  )
}

export default Paragraph