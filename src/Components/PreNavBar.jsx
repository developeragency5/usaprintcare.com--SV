import React from 'react'

const PreNavBar = () => {
  return (
    <header className=" bg-[#0075B1] p-4">
      <h1 className="container mx-auto text-white text-3xl font-bold"
        onClick={() => navigate('/')}
      >
        USAPRINT
      </h1>
    </header>
  )
}

export default PreNavBar
