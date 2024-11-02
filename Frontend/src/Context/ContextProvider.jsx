import React, { createContext, useState } from 'react'

export const AllContext=createContext({})

const ContextProvider = ({children}) => {
    const [StartPageId, setStartPageId] = useState(null)
    const [Cart, setCart] = useState([])
    const [User, setUser] = useState(null)

    const provider={StartPageId,Cart,User, setUser, setCart, setStartPageId}

  return (
    <AllContext.Provider value={provider}>{children}</AllContext.Provider>
  )
}

export default ContextProvider