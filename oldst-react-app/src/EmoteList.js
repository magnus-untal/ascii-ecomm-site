import React from 'react'

export default function EmoteList({ emote }){
  return (
    <div>
        {emote.map(e =>(
          <div key={e.id}>{e}</div>
        ))}
    </div>
  )
}
