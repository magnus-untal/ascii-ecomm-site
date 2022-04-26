import {useEffect, useState} from 'react'
import axios from 'axios'

export default function getEmotes(){
    const [emote, setEmote] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, loadError] = useState(true)
    useEffect(() =>{
        setLoading(true)
        axios.get('http://localhost:8000/products?_page=10&_limit=5').then(res=>{
            setLoading(false)
            console.log('Response from API: ', res)
            return (
                <div className="products">
                    {res.data.map(e => (<>
                        <div className="face"> {e.face}</div>
                        <div className="price"> {e.price}</div>
                        <div className="date"> {e.date}</div>
                    </>
                       
                    ))}
                </div>
            )
         }).catch(err =>{
            console.log(err)
        })
    })
}
