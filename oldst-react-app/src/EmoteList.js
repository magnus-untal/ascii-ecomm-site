import React from 'react'

const EmoteList=({data})=>{
  return(
    <>
      {
        data && data.map((d)=>{
            return(
                <div className="card" key={d.id} style={{fontSize:d.size}}>
                <div className="container">
                    <h4><b>{d.face}</b></h4> 
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
