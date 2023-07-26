import React, { useEffect, useState } from 'react'
import { projectFirestore } from './firebase /config'

function Home() {
 const [data,setData] =useState(null)
 const [isPending,setIsPending] = useState(false)
 const [error,setError] = useState(false)

useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then((snapshot)=> {
        if(snapshot.empty){
         setError('No recipe to load!')
         setIsPending(false)
        } 
        else {
         let results = []
         snapshot.docs.forEach(doc => {
         results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
        }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
},[])

  return (
    <div className=''>Home
    {error && <p className=''>{error}</p>}
    {isPending && <p className=''>Loading ...</p>}
    {data && <p className=''> {data}</p>}
    </div>
  )
}

export default Home