import React from 'react'

const NextMain =  ({ ticket }) => {
  return (
    <div>
         <div className="flex flex-col gap-2 py-2">
      <div className="relative rounded-xl w-full bg-base-100 shadow-xl">
        <figure>
          <img
             src={ticket.imgurl}
             alt={ticket.title}
             className="w-full h-full aspect-video object-cover rounded-xl"
          />
        </figure>
        <div className="absolute bottom-1  rounded-xl card-body text-white">
          <h2 className="card-title">{ticket.title}</h2>
          <p className="truncate">{ticket.description}</p>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default NextMain