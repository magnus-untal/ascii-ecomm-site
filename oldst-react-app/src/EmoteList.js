import React from 'react'

const EmoteList=({data})=>{
  return(
    <>
      {
        data && data.map((d)=>{
            return(
                <div className="card" key={d.id}>
                <div className="container">
                    <h4 className="emote" style={{fontSize:d.size}}><b>{d.face}</b></h4> 
                    <p>{d.price}</p> 
                    <p>{d.date}</p>
                </div>
                </div>
            )
        })
      }
    </>
  )
}

export default EmoteList
