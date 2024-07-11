import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // To recover the appointment when loading the page
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
export default useCatFact
