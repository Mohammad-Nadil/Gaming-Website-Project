import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={`max-w-[104.75rem] px-3 2xl:px-4 mx-auto relative ${className}`} >
      {children}
    </div>
  )
}

export default Container
