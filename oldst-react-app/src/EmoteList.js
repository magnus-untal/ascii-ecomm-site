import {useEffect, useState, useRef} from 'react'
import axios from 'axios';


export default function EmoteList() {
  const [emotes, setEmote] = useState([])
  const [loading, setLoading] = useState(true)
  
  const [hasMore, setHasMore] = useState(false)

  const observer = useRef()
  
  useEffect(() =>{
    setLoading(true)
    axios.get('http://localhost:8000/products?_limit=15').then(res=>{
      setLoading(false)
      console.log('Response from API: ', res)
      setEmote(res.data)
      setHasMore(res.data.length > 0)
    }).catch(err =>{
      console.log(err)
    })
  },[])
  return {emotes, hasMore, loading}
}
