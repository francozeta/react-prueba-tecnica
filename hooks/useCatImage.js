import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

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

  console.log(imageUrl)
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}

export default useCatImage
