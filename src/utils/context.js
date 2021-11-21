import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import find from 'lodash/find'

const CallsContext = createContext({})

export const useCallsContext = () => {
  return useContext(CallsContext)
}

function useProvideCallsContext() {
  const [contacts, setContacts] = useState([])
  const [calls, setCalls] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    fetchContacts()
    fetchCalls()
    fetchHistory()
  }, [])

  // initial fetchers
  const fetchContacts = () => {
    axios
      .get('http://localhost:3001/contacts')
      .then(res => {
        const sortedContacts = res.data.sort((a, b) => b.id - a.id)
        setContacts(sortedContacts)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const fetchCalls = () => {
    axios
      .get('http://localhost:3001/calls')
      .then(res => {
        const sortedCalls = res.data.sort((a, b) => b.id - a.id)
        setCalls(sortedCalls)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const fetchHistory = () => {
    axios
      .get('http://localhost:3001/history')
      .then(res => {
        const sortedHistory = res.data.sort((a, b) => b.id - a.id)
        setHistory(sortedHistory)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // CONTACTS - adds/removes contacts
  const addContact = contact =>
    new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3001/contacts', { contact })
        .then(res => {
          setContacts(prev => [res.data, ...prev])
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  const removeContact = id =>
    new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:3001/contacts/${id}`)
        .then(res => {
          setContacts(contacts => contacts.filter(contact => contact.id !== id))
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })

  // HISTORY - adds call log to the history list
  const addToHistory = callData => {
    axios
      .post('http://localhost:3001/history', { ...callData })
      .then(res => {
        setHistory(prev => [res.data, ...prev])
      })
      .catch(err => {
        console.log(err)
      })
  }

  // CALLS - initiate, updates, terminate calls
  const answerCall = id =>
    axios
      .patch(`http://localhost:3001/calls/${id}`, {
        state: 'ACTIVE',
        answeredAt: new Date(),
      })
      .then(res => {
        setCalls(calls =>
          calls.map(call => {
            if (call.id === id) return res.data
            return call
          })
        )
      })
      .catch(err => {
        console.log(err)
      })

  const initCall = contact =>
    new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3001/calls', {
          contact,
          state: 'RING',
          initiatedAt: new Date(),
          answeredAt: null,
        })
        .then(res => {
          setCalls(prev => [res.data, ...prev])
          const ringTime = Math.floor(Math.random() * (10000 - 999) + 1000)
          setTimeout(() => {
            answerCall(res.data.id).catch(() => {
              setCalls(calls => calls.filter(call => call.id !== res.data.id))
            })
          }, ringTime)
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })

  const terminateCall = id => {
    setCalls(calls =>
      calls.map(call => {
        if (call.id === id) return { ...call, state: 'TERMINATING' }
        return call
      })
    )
    const currentCall = { ...find(calls, { id }) }
    delete currentCall.id
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:3001/calls/${id}`)
        .then(res => {
          setCalls(calls => calls.filter(call => call.id !== id))
          addToHistory({
            ...currentCall,
            terminatedAt: new Date(),
            state: 'TERMINATED',
          })
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  return {
    contacts,
    addContact,
    removeContact,
    calls,
    initCall,
    terminateCall,
    history,
  }
}

export function ProvideCallsContext({ children }) {
  const profile = useProvideCallsContext()
  return (
    <CallsContext.Provider value={profile}>{children}</CallsContext.Provider>
  )
}
