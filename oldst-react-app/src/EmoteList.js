import React from 'react'
import relativeTime from './relativeTime'

const EmoteList=({data})=>{
  return(
    <>
      {
        data && data.map((d)=>{
            return(
                <div className="card" key={d.id}>
                <div className="container">
                    <h4 className="emote" style={{fontSize:d.size}}><b>{d.face}</b></h4> 
                    <p>${d.price/100}</p> 
                    <p>{relativeTime(d.date)}</p>
                </div>
                </div>
            )
        })
      }
    </>
  )
}

export default EmoteList
