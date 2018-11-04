import React from 'react'
import './Ad.css'

const Ad = ({ad = {
    name: 'Test', events: [
        {
            "key": "click",
            "doc_count": 8
        },
        {
            "key": "cldick",
            "doc_count": 1
        }
    ]
}}) => (
        <div className="main-container ad">
            <div className="ad__caption">Ad name</div>
            <div className="ad__name">{ad.name}</div>
            <div className="ad__events-title">Events</div>
            <div className="ad__events">
                {ad.events.map(
                (event, i) => (
                    <div key={i} className="events__event">
                        <div className="events__event-key">{event.key}</div>
                        <div className="events__event-count">{event.doc_count}</div>
                        <div className="events__event-edit row-icon"><i className="material-icons">edit</i></div>
                        <div className="events__event-delete row-icon"><i className="material-icons">delete</i></div>
                    </div>
                )
            )}
            </div>
        </div>
    )

export default Ad