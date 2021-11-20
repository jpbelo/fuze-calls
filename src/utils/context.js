import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'

const CallsContext = createContext({})

export const useCallsContext = () => {
  return useContext(CallsContext)
}

function useProvideCallsContext() {
  const [contacts, setContacts] = useState([])
  const [calls, setCalls] = useState([])

  useEffect(() => {
    fetchContacts()
    fetchCalls()
  }, [])

  const fetchContacts = () => {
    axios
      .get('http://localhost:3001/contacts')
      .then(res => {
        setContacts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const fetchCalls = () => {
    axios
      .get('http://localhost:3001/calls')
      .then(res => {
        setCalls(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    contacts,
    calls,
  }
}

export function ProvideCallsContext({ children }) {
  const profile = useProvideCallsContext()
  return (
    <CallsContext.Provider value={profile}>{children}</CallsContext.Provider>
  )
}
