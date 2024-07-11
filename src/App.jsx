import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  /* const CAT_ENDPOINT_IMAGE_URL =  */
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  /* const [factError, setFactError] = useState() */

  // To recover the appointment when loading the page
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // To recover the image every time we have a new appointment
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
        console.log('Image URL:', url)
      })
  }, [fact])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
