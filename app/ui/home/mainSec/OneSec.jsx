import React from 'react'

const OneSec = ({ ticket }) => {
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <img src={ticket.imgurl}
                alt={ticket.title} />
            <div className="card-body">
                <h2 className="card-title">{ticket.title}</h2>
                <p>{ticket.description}</p>
            </div>
        </div>
    )
}

export default OneSec