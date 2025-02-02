import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={`max-w-[104.75rem] px-1.5 sm:px-3 2xl:px-4 mx-auto relative ${className}`} >
      {children}
    </div>
  )
}

export default Container
