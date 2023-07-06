import React from 'react'

const ShowImage = (props) => {
    return (
        <div style={{ width: '480px', height: '320px' }}>
            <img src={props.source} alt='props.alt' />
        </div>
    )
}

export default ShowImage