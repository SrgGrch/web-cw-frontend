import React from 'react'
import { useParams } from 'react-router-dom'

const EventItem = (props) => {
    let { topicId } = useParams()

    return <div>Привет</div>
}

export default EventItem
