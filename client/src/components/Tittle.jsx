import React from 'react'

const Tittle = ({ title, subtitle ,align}) => {
  return (
    <div className={` flex flex-col justify-center items-center gap-4 text-center ${align === 'left' ? 'md:items-start md:text-left' : ''}`}>
      <h1 className='font-semibold md:text-4xl md:text-[40px]'>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subtitle}</p> 
    </div>
  )
}

export default Tittle
