import React, {useState, useEffect} from 'react';
import EmoteList from './EmoteList';
import axios from 'axios';

function App() {
  const [emote, setEmote] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setLoading(true)
    axios.get('http://localhost:8000/products').then(res=>{
      setLoading(false)
      console.log('Response from API: ', res)
      setEmote(res.data.map(e => e.face))
    }).catch(err =>{
      console.log(err)
    })
  },[])
  
  if(loading) return "Loading..."

  return (
    <div className='App'>
      <header>
          <h1>Products Grid</h1>
          <EmoteList emote={emote}/>
          <p>But first, a word from our sponsors:</p>
          <img
            className='ad'
            src={`http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`}
            alt='ad'/>
      </header>

      products goes here..
    </div>
  );
}

export default App;
